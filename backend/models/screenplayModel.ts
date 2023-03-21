export default interface Screenplay {
    id: number;
    title: string;
    description: string;
    genres: string[];
    releaseDate: Date;
    rating: number;
    director: string;
    ageRating: string;
    image: BinaryData;
    createdAt: Date;
    updatedAt: Date;
}
