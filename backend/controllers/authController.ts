import express from 'express';
import User from '../models/userModel';
import { getUserByEmail } from '../services/userService';
import { sessions } from '../index';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import Session from './../models/sessionModel';

const router = express.Router();

router.get('/login', async (req, res) => {
    const email: string = req.query.email as string;
    const password: string = req.query.password as string;

    const user: User | null = await getUserByEmail(email);

    if (!user) {
        res.status(401).send({ status: 401, message: "Unauthorized" })
        return;
    }

    if (!bcrypt.compare(password, user.password)) {
        res.status(401).send({ status: 401, message: "Unauthorized" })
        return;
    }


    const token: string = crypto.randomBytes(64).toString('hex');
    const newSession: Session = { token: token, userId: user.id, createdAt: new Date() };
    sessions.push(newSession);

    return res.status(200).send({ status: 200, message: "OK", token: token });
});

export default router;