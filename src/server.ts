import * as http from "http";
import {getFilerEpisodes, getListEpisodes} from "./controllers/podscasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-method";

const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {
    //queryString 
    const [baseUrl, queryString] = req.url?.split("?") || ["", ""];

    //listen to the GET method
    if(req.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(req, res);
    }

    if(req.method === HttpMethod.GET && baseUrl === Routes.FILTER){
        await getFilerEpisodes(req, res);
    }
});

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});