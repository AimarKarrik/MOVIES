export default interface ReviewCreate {
    title: string;
    content: string;
    rating: number;
    userId: number;
    screenplayId: number;
}