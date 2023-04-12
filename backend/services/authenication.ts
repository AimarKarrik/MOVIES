import { sessions } from '../index';
import { Request, Response, NextFunction } from 'express';
import Session from '../models/sessionModel';
import User from '../models/userModel';
import { getUserById } from '../services/userService';

export function verifyToken(req: Request, res: Response, next: NextFunction) {
    var excludedPaths: { path: string, method: string }[] = [
        { path: "/auth/login", method: "POST" },
        { path: "/users/register", method: "POST" },
        { path: "/users/ById", method: "GET" },
        { path: "/screenplays", method: "GET" },
        { path: '/screenplays/ById', method: "GET" },
        { path: "/reviews/ByUser", method: "GET" },
        { path: "/reviews/ByScreenplay", method: "GET" },
        { path: "/reviews/ById", method: "GET" },
        { path: "/episodes/", method: "GET" },
        { path: "/episodes/ById", method: "GET" },
    ];

    const excludedPath: { path: string, method: string } | undefined = excludedPaths.find(path => path.path === req.path && path.method === req.method);
    if (excludedPath) {
        next();
        return;
    }

    const token: string = req.headers.token as string;
    const session: Session | undefined = sessions.find(session => session.token === token);
    if (!session) {
        return res.status(401).send({ status: 401, message: "Unauthorized1" });
    }

    const now: Date = new Date();
    const diff = now.getTime() - session.createdAt.getTime();
    const diffMinutes = Math.round(diff / 60000);
    if (diffMinutes > 30) {
        return res.status(401).send({ status: 401, message: "Unauthorized2" });
    }

    req.currentSession = session;
    next();
}

export async function verifyAdmin(currentSession: Session | undefined) {
    if (!currentSession) {
        return false;
    }

    const user: User | null = await getUserById(currentSession.userId);

    if (!user) {
        return false;
    }

    return user.isAdmin;
}