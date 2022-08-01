import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Joi from 'joi';
import { Users } from '../types';
import NotFoundError from '../errors/not-found.error';

dotenv.config();

const Secret:jwt.Secret = process.env.SECRET || 'myscret';

const authService = {
  
  async validateToken(authorization:unknown): Promise<string> {
    const schema = Joi.string().required().messages({
      'any.required': 'Token not found',
    });
    const result = await schema.validateAsync(authorization);
    return result;
  },

  async createToken(payload:object): Promise<string> {
    const token = await jwt.sign(payload, Secret);
    return token;
  },

  async readToken(token:string) {
    try {
      const data = jwt.verify(token, Secret);
      return data as Users;
    } catch (error) {
      throw new NotFoundError('Invalid token');      
    }
  },

};

export default authService;