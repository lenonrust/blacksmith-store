import Joi from 'joi';
import usersModel from '../models/users.model';
import { AddUsers } from '../types';

const usersService = {

  async validateBody(unknown: unknown): Promise<AddUsers> {
    const schema = Joi.object<AddUsers>({
      username: Joi.string().required().min(3),
      classe: Joi.string().required().min(3),
      level: Joi.number().required().min(1),
      password: Joi.string().required().min(8),
    });
    const result = await schema.validateAsync(unknown);
    return result;
  },

  async add(body:AddUsers) {
    await usersModel.add(body);
  },
};

export default usersService;