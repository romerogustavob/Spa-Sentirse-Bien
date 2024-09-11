import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

// Carga las variables de entorno
dotenv.config();

const TOKEN_SECRET = process.env.TOKEN_SECRET;

if (!TOKEN_SECRET) {
  throw new Error('TOKEN_SECRET is not defined in the environment variables');
}

interface JwtPayload {
  [key: string]: any;
}

export function createAccessToken(payload: JwtPayload): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!TOKEN_SECRET) {
        reject(new Error('TOKEN_SECRET is not defined'));
        return;
      }
  
      jwt.sign(
        payload,
        TOKEN_SECRET,
        {
          expiresIn: '1d'
        },
        (err, token) => {
          if (err) reject(err);
          else if (token) resolve(token);
          else reject(new Error('Token generation failed'));
        }
      );
    });
  }