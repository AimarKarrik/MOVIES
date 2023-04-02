import prisma from "./prisma";
import User from '../models/userModel';

export async function getUserByEmail(email: string) {
    const user: User | null = await prisma.users.findUnique({ where: { email: email } });

    return user;
}

export async function getUserById(id: number) {
    const user: User | null = await prisma.users.findUnique({ where: { id: id } });

    return user;
}

export async function createUser({ email, password, name }: { email: string, password: string, name: string }) {
    const user: User = await prisma.users.create({
        data: {
            email: email,
            password: password,
            name: name
        }
    });

    return user;
}

export async function deleteUser(email: string) {
    const user: User | null = await prisma.users.delete({ where: { email: email } });

    return user;
}

export async function updateUser({ email, password, name }: { email: string, password: string, name: string }) {
    const user: User = await prisma.users.update({
        where: { email: email },
        data: {
            email: email,
            password: password,
            name: name
        }
    });

    return user;
}