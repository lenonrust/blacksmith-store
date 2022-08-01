import { OkPacket, RowDataPacket } from 'mysql2';
import { Orders, Users } from '../types';
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

  async getById(userId:Users['id'], orderId:number) {
    const sql = `SELECT userId, JSON_ARRAYAGG( Products.id) as productsIds
    FROM Trybesmith.Orders
    JOIN Trybesmith.Products
    ON Orders.id = Products.orderId
    WHERE Orders.userId = ? AND Products.orderId = ?
    group by Orders.userId`;
    const [[order]] = await connection.query<RowDataPacket[]>(sql, [userId, orderId]);
    return order;
  },

};

export default ordersModel;