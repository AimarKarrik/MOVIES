import fs from "fs";


export class MovieModel {
    public id: number;
    public title: string;
    public description?: string;
    public releaseYear?: number;
    public quality?: string;
    public rating?: number;
    public ageRating?: string;
    public genres?: string;
    public image?: string;
    public type?: string;
    public seasons?: number;
    public director?: string;
    public episodes: Array<object>;

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.episodes = [];
    }

    static getMovies(page: number, pageSize: number) {
        const moviesJsonData: string = fs.readFileSync('./demoData/moviesDemoData.json', 'utf8');
        const movies: Array<MovieModel> = JSON.parse(moviesJsonData);; 

        const pagedMovies = movies.slice((page - 1) * pageSize, page * pageSize);
        return pagedMovies;
    }
}
