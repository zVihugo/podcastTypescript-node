import {repositoryPodcast} from "../repositories/podscats-repository";



export const serviceListEpisodes = async () => {
  const data = await repositoryPodcast();

  return data;
};
