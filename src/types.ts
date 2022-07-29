export type Products = {
  id: number
  name: string
  amount: string
  orderId: number
};

export type AddProducts = Omit<Products, 'id' | 'orderId'>;
