import * as http from "http";
import {getFilerEpisodes, getListEpisodes} from "./controllers/podscasts-controller";

const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {
    //listen to the GET method
    if(req.method === "GET" && req.url === "/api/list") {
        await getListEpisodes(req, res);
    }

    if(req.method === "GET" && req.url === "/api/episode"){
        await getFilerEpisodes(req, res);
    }
});

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});