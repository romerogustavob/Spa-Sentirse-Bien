import { Request, Response } from 'express';
import User, { IUser } from '../models/user_model.ts';
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../libs/jwt';
import jwt from 'jsonwebtoken';

const TOKEN_SECRET = process.env.TOKEN_SECRET || 'your_secret_key';

// Extender la interfaz Request para incluir la propiedad user
declare module 'express-serve-static-core' {
    interface Request {
        user?: IUser;
    }
}

export const register = async (req: Request, res: Response): Promise<void> => {
    const { email, password, username } = req.body;
    
    try {
        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: passwordHash
        });
    
        const userSaved = await newUser.save();
        const token = await createAccessToken({ id: userSaved._id });

        res.cookie('token', token);
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt
        });
    }
    catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
    
    try {
        const userFound = await User.findOne({ email });

        if (!userFound) {
            res.status(400).json({ message: "User not found" });
            return;
        }

        const isMatch = await bcrypt.compare(password, userFound.password);

        if (!isMatch) {
            res.status(400).json({ message: "Invalid credential" });
            return;
        }

        const token = await createAccessToken({ id: userFound._id });

        res.cookie('token', token);
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        });
    }
    catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

export const logout = (_req: Request, res: Response): void => {
    res.cookie('token', "", {
        expires: new Date(0)
    });
    res.sendStatus(200);
};

export const profile = async (req: Request, res: Response): Promise<void> => {
    if (!req.user) {
        res.status(401).json({ message: 'No autorizado' });
        return;
    }

    const userFound = await User.findById(req.user.id);
    
    if (!userFound) {
        res.status(400).json({ message: 'Usuario no encontrado' });
        return;
    }

    res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt
    });
};

interface JwtPayload {
    id: string;
}

export const verifyToken = async (req: Request, res: Response): Promise<void> => {
    const { token } = req.cookies;

    if (!token) {
        res.status(401).json({ message: 'No autorizado' });
        return;
    }

    try {
        const user = jwt.verify(token, TOKEN_SECRET) as JwtPayload;

        const userFound = await User.findById(user.id);
        if (!userFound) {
            res.status(401).json({ message: 'No autorizado' });
            return;
        }

        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        });
    } catch (error) {
        res.status(401).json({ message: 'No autorizado' });
    }
};