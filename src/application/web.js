import express from 'express';
import { useRouter } from '../router/api.js';
import { publicRouter } from '../router/public-api.js';
import { errorMiddleware } from '../middleware/error-middleware.js';

export const web = express();
web.use(express.json());

web.use(publicRouter);
web.use(useRouter);

web.use(errorMiddleware);
