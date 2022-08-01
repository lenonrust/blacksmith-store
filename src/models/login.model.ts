import { RowDataPacket } from 'mysql2';
import { Login } from '../types';
import connection from './connection';

const loginModel = {

  async login(data:Login):Promise<RowDataPacket> {
    const { username } = data;
    const sql = `SELECT 
    Users.username,
    Users.password 
    FROM Trybesmith.Users
    WHERE Users.username = ?;`;
    const [[user]] = await connection.query<RowDataPacket[]>(sql, [username]);
    return user;
  },
};

export default loginModel;