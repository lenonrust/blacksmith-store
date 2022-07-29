import { Request, Response } from 'express';
import usersService from '../service/users.service';
import authService from '../service/auth.service';

const usersController = {

  async add(req:Request, res:Response) {
    await usersService.add(req.body);
    const token = await authService.createToken(req.body);
    res.status(201).json({ token });
  },
};

export default usersController;