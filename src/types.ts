export type Products = {
  id: number
  name: string
  amount: string
  orderId: number
};

export type AddProducts = Omit<Products, 'id' | 'orderId'>;

export type Users = {
  id: number
  username: string
  classe: string
  level: number
  password: string
};

export type AddUsers = Omit<Users, 'id'>;

export type Orders = {
  id: number
  userId: number
  productsIds: Array<number>
};