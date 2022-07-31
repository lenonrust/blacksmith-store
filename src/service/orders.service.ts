import ordersModel from '../models/orders.model';

const ordersService = {

  async getAll() {
    const order = await ordersModel.getAll();
    return order;
  },
  
};

export default ordersService;