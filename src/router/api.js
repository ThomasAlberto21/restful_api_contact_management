import express from 'express';
import userController from '../controller/user-controller.js';
import contactController from '../controller/contact-controller.js';
import addressController from '../controller/address-controller.js';
import { authMiddleware } from '../middleware/auth-middleware.js';

const useRouter = new express.Router();
useRouter.use(authMiddleware);

// User API
useRouter.get('/api/users/current', userController.getUser);
useRouter.patch('/api/users/current', userController.updateUser);
useRouter.delete('/api/users/logout', userController.logoutUser);

// Contact API
useRouter.post('/api/contacts', contactController.createContact);
useRouter.get('/api/contacts/:contactId', contactController.getContact);
useRouter.put('/api/contacts/:contactId', contactController.updateContact);
useRouter.delete('/api/contacts/:contactId', contactController.removeContact);
useRouter.get('/api/contacts', contactController.searchContact);

// Address API
useRouter.post(
  '/api/contacts/:contactId/addresses',
  addressController.createAddress,
);
useRouter.get(
  '/api/contacts/:contactId/addresses/:addressId',
  addressController.getAddress,
);
useRouter.put(
  '/api/contacts/:contactId/addresses/:addressId',
  addressController.updateAddress,
);
useRouter.delete(
  '/api/contacts/:contactId/addresses/:addressId',
  addressController.removeAddress,
);

export { useRouter };
