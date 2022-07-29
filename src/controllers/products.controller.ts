import { Request, Response } from 'express';
import productsService from '../service/products.service';

const productsController = {

  async add(req:Request, res:Response) {
    try {
      const product = await productsService.add(req.body);
      res.status(201).json(product);  
    } catch (error) {
      console.log(error);
    }
  },

};

export default productsController;