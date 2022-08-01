import express from 'express';
import 'express-async-errors';
import ordersRoutes from './routes/orders.routes';
import productsRoutes from './routes/products.routes';
import usersRoutes from './routes/users.routes';
import loginRoutes from './routes/login.routes';
import errorMiddleware from './middlewares/error.middleware';

const app = express();

app.use(express.json());

app.use('/login', loginRoutes);

app.use('/orders', ordersRoutes);

app.use('/products', productsRoutes);

app.use('/users', usersRoutes);

app.use(errorMiddleware);

export default app;
