export default interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    bio: string | null;
    isAdmin: boolean;
    createdAt: Date;
    updatedAt: Date;
}