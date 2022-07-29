import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const Secret:jwt.Secret = process.env.SECRET || 'myscret';

const authService = {
  
  async createToken(payload:object): Promise<string> {
    const token = await jwt.sign(payload, Secret);
    return token;
  },

};

export default authService;