import { IncomingMessage, Server, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await serviceListEpisodes();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(content));
};

export const getFilerEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  
  const content = await serviceFilterEpisodes(req.url);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(content));
};
