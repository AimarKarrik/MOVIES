import { createScreenplay } from '../services/screenplayService';
import fs from 'fs';
import Screenplay from '../models/screenplayModel';


export async function populateScreenplays() {
    const screenplayData: Screenplay[] = JSON.parse(fs.readFileSync("./demoData/moviesData.json", 'utf8'));
    for (const screenplay of screenplayData) {
        
        await createScreenplay(screenplay);
        console.log(screenplay);
    }
};

