import { RowDataPacket, OkPacket } from 'mysql2';
import connection from './connection';
import { AddProducts, Products } from '../types';

const productsModel = {

  async getById(id:Products['id']): Promise<Products> {
    const sql = `SELECT 
    Products.id,
    Products.name,
    Products.amount,
    Products.orderId
    FROM Trybesmith.Products
    WHERE Products.id = ?;`;
    const [[product]] = await connection.query<RowDataPacket[]>(sql, [id]);
    return product as Products;
  },

  async add(body:AddProducts) {
    const { name, amount } = body;
    const sql = `INSERT INTO Trybesmith.Products
    (name, amount)
    VALUES
    (?,?);`;
    const [{ insertId }] = await connection.query<OkPacket>(sql, [name, amount]);
    return insertId;
  },

};

export default productsModel;