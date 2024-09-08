import * as http from "http";
import {getFilerEpisodes, getListEpisodes} from "./controllers/podscasts-controller";

const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {
    //queryString 
    const [baseUrl, queryString] = req.url?.split("?") || ["", ""];

    //listen to the GET method
    if(req.method === "GET" && baseUrl === "/api/list") {
        await getListEpisodes(req, res);
    }

    if(req.method === "GET" && baseUrl === "/api/episode"){
        await getFilerEpisodes(req, res);
    }
});

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});