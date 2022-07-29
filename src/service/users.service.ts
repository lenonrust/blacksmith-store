import usersModel from '../models/users.model';
import { AddUsers } from '../types';

const usersService = {

  async add(body:AddUsers) {
    await usersModel.add(body);
  },
};

export default usersService;