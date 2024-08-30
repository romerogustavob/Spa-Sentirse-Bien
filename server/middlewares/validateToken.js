import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js';

export const authRequired = (req, res, next) => {
    const {token} = req.cookies;
    
    if (!token) 
        return res.status(401).json({messaga: 'No autorizado'})

        jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
            if (err) return res.status(403).json({mmessage: 'Token inválido'});
            
            req.user = decoded

            next();
    })
}