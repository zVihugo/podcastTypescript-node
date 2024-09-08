import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcastModel";


const pathData = path.join(__dirname, "../repositories/podscasts.json");

export const repositoryPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
    const rawData = fs.readFileSync(pathData, "utf-8");
    let jsonFile = JSON.parse(rawData)

    if(podcastName){
        jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName);
    }

    return jsonFile;
}