import productsModel from '../models/products.model';
import { AddProducts } from '../types';

const productsService = {

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