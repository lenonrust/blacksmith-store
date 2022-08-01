import { Request, Response } from 'express';
import usersService from '../service/users.service';
import authService from '../service/auth.service';

const usersController = {

  async add(req:Request, res:Response) {
    const body = await usersService.validateBody(req.body);
    await usersService.add(body);
    const token = await authService.createToken(body);
    res.status(201).json({ token });
  },
};

export default usersController;