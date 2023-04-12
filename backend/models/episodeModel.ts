export default interface Episode {
  id?: number;
  title: string;
  description: string;
  season: number;
  number: number;
  releaseDate: Date;
  rating: number;
  image?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  screenplayId: number;
}
