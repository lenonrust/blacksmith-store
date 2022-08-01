import { Router } from 'express';
import ordersController from '../controllers/orders.controller';

const ordersRoutes = Router();

ordersRoutes.get('/', ordersController.getAll);
ordersRoutes.post('/', ordersController.add);

export default ordersRoutes;