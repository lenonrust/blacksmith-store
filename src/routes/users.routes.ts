import { Router } from 'express';
import usersController from '../controllers/users.controller';

const usersRoutes = Router();

usersRoutes.post('/', usersController.add);

export default usersRoutes;