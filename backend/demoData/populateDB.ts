import { createScreenplay } from '../services/screenplayService';
import fs from 'fs';
import Screenplay from '../models/screenplayModel';


export async function populateScreenplays() {
    const screenplayData = JSON.parse(fs.readFileSync("./demoData/moviesDemoData.json", 'utf8'));
    for (const screenplay of screenplayData) {
        const screenplayNacissaryData: Screenplay = {
            title: screenplay.title,
            description: screenplay.description,
            genres: screenplay.genre,
            director: screenplay.director,
            image: Buffer.from(screenplay.image, 'base64'),
            rating: screenplay.rating,
            ageRating: screenplay.ageRating,
            releaseDate: new Date(screenplay.releaseDate, 0, 1),
        }
        await createScreenplay(screenplayNacissaryData);
        console.log(screenplayNacissaryData);
    }
};
