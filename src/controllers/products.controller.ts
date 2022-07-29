import { Request, Response } from 'express';
import productsService from '../service/products.service';

const productsController = {

  async add(req:Request, res:Response) {
    const product = await productsService.add(req.body);
    res.status(201).json(product);  
  },

  async getAll(req:Request, res:Response) {
    const products = await productsService.getAll();
    res.json(products);
  },

};

export default productsController;