import { Request, Response } from 'express';
import authService from '../service/auth.service';
import loginService from '../service/login.service';

const loginController = {

  async login(req:Request, res:Response) {
    const user = await loginService.validateBodyLogin(req.body);
    await loginService.login(user);
    const token = await authService.createToken(user);
    res.status(200).json({ token });
  },

};

export default loginController;