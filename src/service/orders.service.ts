import Joi from 'joi';
import ordersModel from '../models/orders.model';
import { Orders } from '../types';

const ordersService = {

  async validateBody(unknown: unknown) {
    const schema = Joi.array().min(1)
      .items(Joi.number().label('productsIds')).required()
      .label('productsIds')
      .messages({
        'array.min': '"productsIds" must include only numbers',
      });
    const result = await schema.validateAsync(unknown);
    return result;
  },
  async getAll() {
    const order = await ordersModel.getAll();
    return order;
  },
  
  async add(body:Orders) {
    const id = await ordersModel.add(body);
    return id;
  },

};  

export default ordersService;