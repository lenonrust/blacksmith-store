import express from 'express';
import ordersRoutes from './routes/orders.routes';
import productsRoutes from './routes/products.routes';
import usersRoutes from './routes/users.routes';

const app = express();

app.use(express.json());

app.use('/orders', ordersRoutes);

app.use('/products', productsRoutes);

app.use('/users', usersRoutes);

export default app;
