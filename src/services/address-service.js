import { validate } from '../validation/validation.js';
import { getContactValidation } from '../validation/contact-validation.js';
import { prismaClient } from '../application/database.js';
import { ResponseError } from '../error/response-error.js';
import {
  createAddressValidation,
  getAddressValidation,
} from '../validation/address-validation.js';

const checkContactMustExist = async (user, contactId) => {
  contactId = validate(getContactValidation, contactId);

  const totalContactInDatabase = await prismaClient.contact.count({
    where: {
      username: user.username,
      id: contactId,
    },
  });

  if (totalContactInDatabase !== 1) {
    throw new ResponseError(404, 'contact is not found');
  }

  return contactId;
};

const createAddress = async (user, contactId, request) => {
  contactId = await checkContactMustExist(user, contactId);

  const address = validate(createAddressValidation, request);
  address.contact_id = contactId;

  return prismaClient.address.create({
    data: address,
    select: {
      id: true,
      street: true,
      city: true,
      province: true,
      country: true,
      postal_code: true,
    },
  });
};

const getAddress = async (user, contactId, addressId) => {
  contactId = await checkContactMustExist(user, contactId);
  addressId = await validate(getAddressValidation, addressId);

  const address = await prismaClient.address.findFirst({
    where: {
      contact_id: contactId,
      id: addressId,
    },
    select: {
      id: true,
      street: true,
      city: true,
      province: true,
      country: true,
      postal_code: true,
    },
  });

  if (!address) {
    throw new ResponseError(404, 'Address is not found');
  }

  return address;
};

export default {
  createAddress,
  getAddress,
};