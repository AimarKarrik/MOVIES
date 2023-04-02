import express from 'express';
import Session from '../../models/sessionModel';


declare global {
    namespace Express {
        interface Request {
            currentSession?: Session;
        }
    }
}