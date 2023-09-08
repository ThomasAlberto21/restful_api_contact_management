import supertest from 'supertest';
import { web } from '../src/application/web.js';
import {
  createTestUser,
  removeAllTestContacts,
  removeTestUser,
} from './test-util.js';

describe('Test Contact API', () => {
  describe('POST /api/contacts', () => {
    beforeEach(async () => {
      await createTestUser();
    });

    afterEach(async () => {
      await removeAllTestContacts();
      await removeTestUser();
    });

    it('should can create new contact', async () => {
      const result = await supertest(web)
        .post('/api/contacts')
        .set('Authorization', 'test')
        .send({
          first_name: 'test',
          last_name: 'test',
          email: 'test123@gmail.com',
          phone: '123456789',
        });

      expect(result.status).toBe(200);
      expect(result.body.data.id).toBeDefined();
      expect(result.body.data.first_name).toBe('test');
      expect(result.body.data.last_name).toBe('test');
      expect(result.body.data.email).toBe('test123@gmail.com');
      expect(result.body.data.phone).toBe('123456789');
    });

    it('should reject if request is not valid', async () => {
      const result = await supertest(web)
        .post('/api/contacts')
        .set('Authorization', 'test')
        .send({
          first_name: '',
          last_name: 'test',
          email: 'test123',
          phone: '123456789',
        });

      expect(result.status).toBe(400);
      expect(result.body.errors).toBeDefined();
    });
  });
});
