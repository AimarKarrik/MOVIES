import Session from "./models/sessionModel";

declare namespace Express {
    export interface Request {
        userSession?: Session
    }
}