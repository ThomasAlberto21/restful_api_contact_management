import bcrypt from 'bcrypt';
import supertest from 'supertest';
import { web } from '../src/application/web.js';
import { logger } from '../src/application/logging.js';
import { createTestUser, getTestUser, removeTestUser } from './test-util.js';

describe('Test API Contact Management', () => {
  describe('POST /api/users', () => {
    afterEach(async () => {
      await removeTestUser();
    });

    it('should can register new user', async () => {
      const result = await supertest(web).post('/api/users').send({
        username: 'test',
        password: 'test1234',
        name: 'test',
      });

      expect(result.status).toBe(200);
      expect(result.body.data.username).toBe('test');
      expect(result.body.data.name).toBe('test');
      expect(result.body.data.password).toBeUndefined();
    });

    it('should reject if request is invalid', async () => {
      const result = await supertest(web).post('/api/users').send({
        username: '',
        password: '',
        name: '',
      });

      logger.info(result.body);

      expect(result.status).toBe(400);
      expect(result.body.errors).toBeDefined();
    });

    it('should reject if username already registered', async () => {
      let result = await supertest(web).post('/api/users').send({
        username: 'test',
        password: 'test1234',
        name: 'test',
      });

      logger.info(result.body);

      expect(result.status).toBe(200);
      expect(result.body.data.username).toBe('test');
      expect(result.body.data.name).toBe('test');
      expect(result.body.data.password).toBeUndefined();

      result = await supertest(web).post('/api/users').send({
        username: 'test',
        password: 'test1234',
        name: 'test',
      });

      logger.info(result.body);

      expect(result.status).toBe(400);
      expect(result.body.errors).toBeDefined();
    });
  });

  describe('POST /api/users/login', () => {
    beforeEach(async () => {
      await createTestUser();
    });

    afterEach(async () => {
      await removeTestUser();
    });

    it('should can login', async () => {
      const result = await supertest(web).post('/api/users/login').send({
        username: 'test',
        password: 'test1234',
      });

      logger.info(result.body);

      expect(result.status).toBe(200);
      expect(result.body.data.token).toBeDefined();
      expect(result.body.data.token).not.toBe('test1234');
    });

    it('should reject login if request is invalid', async () => {
      const result = await supertest(web).post('/api/users/login').send({
        username: '',
        password: '',
      });

      logger.info(result.body);

      expect(result.status).toBe(400);
      expect(result.body.errors).toBeDefined();
    });

    it('should reject login if password is wrong', async () => {
      const result = await supertest(web).post('/api/users/login').send({
        username: 'test',
        password: 'salah',
      });

      logger.info(result.body);

      expect(result.status).toBe(401);
      expect(result.body.errors).toBeDefined();
    });

    it('should reject login if username is wrong', async () => {
      const result = await supertest(web).post('/api/users/login').send({
        username: 'salah',
        password: 'test1234',
      });

      logger.info(result.body);

      expect(result.status).toBe(401);
      expect(result.body.errors).toBeDefined();
    });
  });

  describe('GET /api/users/current', function () {
    beforeEach(async () => {
      await createTestUser();
    });

    afterEach(async () => {
      await removeTestUser();
    });

    it('should can get current user', async () => {
      const result = await supertest(web)
        .get('/api/users/current')
        .set('Authorization', 'test');

      logger.info(result.body);

      expect(result.status).toBe(200);
      expect(result.body.data.username).toBe('test');
      expect(result.body.data.name).toBe('test');
    });

    it('should reject if token is invalid', async () => {
      const result = await supertest(web)
        .get('/api/users/current')
        .set('Authorization', 'salah');

      expect(result.status).toBe(401);
      expect(result.body.errors).toBeDefined();
    });
  });

  describe('PATCH /api/users/current', () => {
    beforeEach(async () => {
      await createTestUser();
    });

    afterEach(async () => {
      await removeTestUser();
    });

    it('should can update user', async () => {
      const result = await supertest(web)
        .patch('/api/users/current')
        .set('Authorization', 'test')
        .send({
          name: 'Thomas Alberto',
          password: 'myth123456',
        });

      expect(result.status).toBe(200);
      expect(result.body.data.username).toBe('test');
      expect(result.body.data.name).toBe('Thomas Alberto');

      const user = await getTestUser();
      expect(await bcrypt.compare('myth123456', user.password)).toBe(true);
    });

    it('should can update user only name', async () => {
      const result = await supertest(web)
        .patch('/api/users/current')
        .set('Authorization', 'test')
        .send({
          name: 'Thomas Alberto',
        });

      expect(result.status).toBe(200);
      expect(result.body.data.username).toBe('test');
      expect(result.body.data.name).toBe('Thomas Alberto');
    });

    it('should can update user only password', async () => {
      const result = await supertest(web)
        .patch('/api/users/current')
        .set('Authorization', 'test')
        .send({
          password: 'myth123456',
        });

      expect(result.status).toBe(200);
      expect(result.body.data.username).toBe('test');
      expect(result.body.data.name).toBe('test');

      const user = await getTestUser();
      expect(await bcrypt.compare('myth123456', user.password)).toBe(true);
    });

    it('should reject if request is not valid', async () => {
      const result = await supertest(web)
        .patch('/api/users/current')
        .set('Authorization', 'salah')
        .send({});

      expect(result.status).toBe(401);
    });
  });
});