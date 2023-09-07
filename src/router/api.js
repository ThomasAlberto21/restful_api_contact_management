import express from 'express';
import userController from '../controller/user-controller.js';
import { authMiddleware } from '../middleware/auth-middleware.js';

const useRouter = new express.Router();
useRouter.use(authMiddleware);
useRouter.get('/api/users/current', userController.getUser);
useRouter.patch('/api/users/current', userController.updateUser);
useRouter.delete('/api/users/logout', userController.logoutUser);

export { useRouter };
