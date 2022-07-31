import { Request, Response } from 'express';
import ordersService from '../service/orders.service';

const ordersController = {

  async getAll(req:Request, res:Response) {
    const orders = await ordersService.getAll();
    res.json(orders);
  },

};

export default ordersController;