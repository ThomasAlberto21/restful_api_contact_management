import supertest from 'supertest';
import { web } from '../src/application/web.js';
import {
  createManyTestContacts,
  createTestUser,
  getTestContact,
  removeAllTestAddresses,
  removeAllTestContacts,
  removeTestUser,
} from './test-util.js';

describe('Test Address API', () => {
  describe('POST /api/contacts/:contactId/addresses', () => {
    beforeEach(async () => {
      await createTestUser();
      await createManyTestContacts();
    });

    afterEach(async () => {
      await removeAllTestAddresses();
      await removeAllTestContacts();
      await removeTestUser();
    });

    it('should can create new address', async () => {
      const testContact = await getTestContact();

      const result = await supertest(web)
        .post('/api/contacts/' + testContact.id + '/addresses')
        .set('Authorization', 'test')
        .send({
          street: 'Street test',
          city: 'City test',
          province: 'Province test',
          country: 'Country test',
          postal_code: '123456',
        });

      expect(result.status).toBe(200);
      expect(result.body.data.id).toBeDefined();
      expect(result.body.data.street).toBe('Street test');
      expect(result.body.data.city).toBe('City test');
      expect(result.body.data.province).toBe('Province test');
      expect(result.body.data.country).toBe('Country test');
      expect(result.body.data.postal_code).toBe('123456');
    });

    it('should reject if address request is invalid', async () => {
      const testContact = await getTestContact();

      const result = await supertest(web)
        .post('/api/contacts/' + testContact.id + '/addresses')
        .set('Authorization', 'test')
        .send({
          street: 'Street test',
          city: 'City test',
          province: 'Province test',
          country: '',
          postal_code: '',
        });

      expect(result.status).toBe(400);
    });

    it('should reject if contact is not found', async () => {
      const testContact = await getTestContact();

      const result = await supertest(web)
        .post('/api/contacts/' + (testContact.id + 20) + '/addresses')
        .set('Authorization', 'test')
        .send({
          street: 'Street test',
          city: 'City test',
          province: 'Province test',
          country: '',
          postal_code: '',
        });

      expect(result.status).toBe(404);
    });
  });
});
