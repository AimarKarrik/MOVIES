import { sessions } from '../index';
import { Request, Response, NextFunction } from 'express';
import Session from '../models/sessionModel';
import User from '../models/userModel';
import { getUserById } from '../services/userService';

export function verifyToken(req: Request, res: Response, next: NextFunction) {
    var excludedPaths = ['/auth/login', '/users/register'];

    if (excludedPaths.indexOf(req.path) > -1) {
        next();
        return;
    }

    const token: string = req.headers.token as string;
    const session: Session | undefined = sessions.find(session => session.token === token);
    if (!session) {
        res.status(401).send({ status: 401, message: "Unauthorized" });
        return;
    }

    const now = new Date();
    const diff = now.getTime() - session.createdAt.getTime();
    const diffMinutes = Math.round(diff / 60000);
    if (diffMinutes > 30) {
        res.status(401).send({ status: 401, message: "Unauthorized" });
        return;
    }

    req.currentSession = session;
    next();
}

export async function verifyAdmin(req: Request, res: Response, next: NextFunction) {
    const user: User | null = await getUserById(req.currentSession!.userId);

    if (!user) {
        res.status(401).send({ status: 401, message: "Unauthorized" });
        return;
    }
    if (!user.isAdmin) {
        res.status(401).send({ status: 401, message: "Unauthorized" });
        return;
    }

    next();
}