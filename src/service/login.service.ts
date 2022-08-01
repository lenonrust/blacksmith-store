import Joi from 'joi';
import NotFoundError from '../errors/not-found.error';
import loginModel from '../models/login.model';
import { Login } from '../types';

const loginService = {

  async validateBodyLogin(unknown: unknown): Promise<Login> {
    const schema = Joi.object<Login>({
      username: Joi.string().required().min(1),
      password: Joi.string().required().min(1),
    });
    const result = await schema.validateAsync(unknown);
    return result;
  },

  async login(data:Login) {
    const user = await loginModel.login(data);
    if (!user || user.password !== data.password) {
      throw new NotFoundError('Username or password invalid');
    }
    return user;
  },

};

export default loginService;