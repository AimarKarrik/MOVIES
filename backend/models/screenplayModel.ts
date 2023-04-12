export default interface Screenplay {
    id?: number;
    title: string;
    description: string;
    genres: string;
    releaseDate: Date;
    rating: number;
    director: string;
    ageRating: string;
    image: string | null;
    createdAt?: Date;
    updatedAt?: Date;
}
