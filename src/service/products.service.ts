import Joi from 'joi';
import productsModel from '../models/products.model';
import { AddProducts } from '../types';

const productsService = {

  async validateBody(unknown: unknown): Promise<AddProducts> {
    const schema = Joi.object<AddProducts>({
      name: Joi.string().required().min(3),
      amount: Joi.string().required().min(3),
    });
    const result = await schema.validateAsync(unknown);
    return result;
  },

  async add(body:AddProducts) {
    const id = await productsModel.add(body);
    const result = await productsModel.getById(id);
    const { orderId, ...newObj } = result;
    return newObj; 
  },

  async getAll() {
    const result = await productsModel.getAll();
    return result;
  },

};

export default productsService;