import prisma from "./prisma";
import User from '../models/userModel';

export async function getUserByEmail(email: string) {
    const user: User | null = await prisma.users.findUnique({ where: { email: email } });

    return user;
}

export async function createUser(user: User) {
    let { email, password, name } = user;
    const result: User = await prisma.users.create({
        data: {
            email: email,
            password: password,
            name: name
        }
    });

    return result;
}

export async function deleteUser(email: string) {
    const user: User | null = await prisma.users.delete({ where: { email: email } });

    return user;
}

export async function updateUser(user: User) {
    let { email, password, name } = user;
    const result: User = await prisma.users.update({
        where: { email: email },
        data: {
            email: email,
            password: password,
            name: name
        }
    });

    return result;
}