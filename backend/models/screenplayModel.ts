export default interface Screenplay {
    id?: number;
    title: string;
    description: string;
    genres: string;
    releaseDate: Date;
    rating: number;
    director: string;
    ageRating: string;
    image: ArrayBuffer;
    createdAt?: Date;
    updatedAt?: Date;
}
