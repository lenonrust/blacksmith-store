import { Request, Response } from 'express';
import ordersModel from '../models/orders.model';
import productsModel from '../models/products.model';
import usersModel from '../models/users.model';
import authService from '../service/auth.service';
import ordersService from '../service/orders.service';
import { Products } from '../types';

const ordersController = {

  async getAll(req:Request, res:Response) {
    const orders = await ordersService.getAll();
    res.json(orders);
  },

  async add(req:Request, res:Response) {
    const { productsIds } = req.body;
    const { authorization } = req.headers;
    const token = await authService.validateToken(authorization);
    const user = await authService.readToken(token);
    await ordersService.validateBody(productsIds);
    const { id } = await usersModel.getByName(user.username);
    const orderId = await ordersService.add(id);
    await Promise
      .all(productsIds.map((itr:Products['id']) => productsModel.update(itr, orderId)));
    const result = await ordersModel.getById(id, orderId);
    res.status(201).json(result);
  },

};

export default ordersController;