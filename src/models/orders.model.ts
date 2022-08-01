import { OkPacket, RowDataPacket } from 'mysql2';
import { Orders } from '../types';
import connection from './connection';

const ordersModel = {

  async getAll():Promise<RowDataPacket[]> {
    // https://stackoverflow.com/questions/53952383/add-condition-to-mysql-json-arrayagg-function
    const sql = `SELECT
    Orders .id,
    Orders .userId,
    JSON_ARRAYAGG( Products.id) as productsIds
    FROM Trybesmith.Products
    JOIN Trybesmith.Orders
    ON Products.orderId = Orders.id
    GROUP BY Orders. id 
    ORDER BY Orders.userId`;
    const [order] = await connection.query<RowDataPacket[]>(sql);
    return order;
  },

  async add(userId:Orders) {
    const sql = `INSERT INTO Trybesmith.Orders
    (userId)
    VALUES
    (?);`;
    const [{ insertId }] = await connection.query<OkPacket>(sql, [userId]);
    return insertId;
  },

};

export default ordersModel;