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

export async function deleteUser(id: number) {
    const user: User | null = await prisma.users.delete({ where: { id: id } });

    return user;
}

export async function updateUser({ id, email, password, name }: { id: number, email: string, password: string, name: string }) {
    const user: User = await prisma.users.update({
        where: { id: id },
        data: {
            email: email,
            password: password,
            name: name
        }
    });

    return user;
}