export default interface Review {
    id?: number;
    title: string;
    content: string;
    rating: number;
    createdAt?: Date;
    updatedAt?: Date;
    screenplayId?: number;
    userId?: number;
}