import { sessions } from '../index';
import { Request, Response, NextFunction } from 'express';
import Session from '../models/sessionModel';

export function verifyToken(req: Request, res: Response, next: NextFunction) {
    var excludedPaths = ['/auth/login'];

    if (excludedPaths.indexOf(req.path) > -1) {
        next();
        return;
    }


    const token: string = req.headers.token as string;
    const session: Session | undefined = sessions.find(session => session.token === token);
    if (!session) {
        res.status(401).send({ message: "Unauthorized" });
        return;
    }

    const now = new Date();
    const diff = now.getTime() - session.createdAt.getTime();
    const diffMinutes = Math.round(diff / 60000);
    if (diffMinutes > 30) {
        res.status(401).send({ message: "Unauthorized" });
        return;
    }

    req.userSession = session;
    next();
}    
