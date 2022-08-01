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

  async add(body:AddProducts): Promise<number> {
    const { name, amount } = body;
    const sql = `INSERT INTO Trybesmith.Products
    (name, amount)
    VALUES
    (?,?);`;
    const [{ insertId }] = await connection.query<OkPacket>(sql, [name, amount]);
    return insertId;
  },

  async getAll(): Promise<Products[]> {
    const sql = 'SELECT * FROM Trybesmith.Products;';
    const [products] = await connection.query<RowDataPacket[]>(sql);
    return products as Products[];
  },

  async update(id: Products['id'], changes:Products['orderId']) {
    console.log(id, changes);
    
    const sql = `UPDATE Trybesmith.Products
    SET
    Products.orderId = ? 
    WHERE Products.id = ?;`;
    await connection.query(sql, [changes, id]);
  },
};

export default productsModel;