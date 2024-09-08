import { repositoryPodcast } from "../repositories/podscats-repository"


export const serviceFilterEpisodes = async (podcastName: string) => {
    const data = await repositoryPodcast(podcastName);

    return data;
}

