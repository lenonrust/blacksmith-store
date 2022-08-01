import { RowDataPacket, OkPacket } from 'mysql2';
import connection from './connection';
import { Users, AddUsers } from '../types';

const usersModel = {

  async getById(id:Users['id']): Promise<Users> {
    const sql = `SELECT 
    Users.id,
    Users.username,
    Users.classe,
    Users.level,
    Users.password
    FROM Trybesmith.Users
    WHERE Users.id = ?;`;
    const [[product]] = await connection.query<RowDataPacket[]>(sql, [id]);
    return product as Users;
  },

  async add(body:AddUsers): Promise<number> {
    const { username, classe, level, password } = body;
    const sql = `INSERT INTO Trybesmith.Users
    (username, classe, level, password)
    VALUES
    (?,?,?,?);`;
    const [{ insertId }] = await connection
      .query<OkPacket>(sql, [username, classe, level, password]);
    return insertId;
  },

  async getByName(username:Users['username']) {
    const sql = `SELECT 
      Users.id
      FROM Trybesmith.Users
      WHERE Users.username = ?;`;
    const [[user]] = await connection.query<RowDataPacket[]>(sql, [username]);
    return user;
  },

};

export default usersModel;