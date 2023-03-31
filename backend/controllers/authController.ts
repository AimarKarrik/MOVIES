import express from 'express';
import User from '../models/userModel';
import { getUserByEmail } from '../services/userService';
import { sessions } from '../index';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

const router = express.Router();

router.get('/login', async (req, res) => {
    const email: string = req.query.email as string;
    const password: string = req.query.password as string;

    const user: User | null = await getUserByEmail(email);

    if (!user) {
        res.status(404).send({ message: "Not found" })
        return;
    }

    if (!bcrypt.compare(password, user.password)) {
        res.status(401).send({ message: "Unauthorized" })
        return;
    }

    // generate token using bcrypt
    const token: string = crypto.randomBytes(64).toString('hex');
    sessions.push({ token: token, userId: user.id, createdAt: new Date() });
    
    res.send({ token: token, status: 200, message: "OK" });
});

export default router;