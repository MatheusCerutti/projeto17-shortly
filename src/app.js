import express from "express";
import cors from "cors";
import signin from "./routers/signinrouter.js";
import signup from "./routers/signuprouter.js";
import urls from "./routers/urlsrouter.js";

const server = express();
server.use(express.json());
server.use(cors());

const PORT = Number(process.env.PORT) || 5000;

server.use(signup)
server.use(signin)
server.use(urls)


server.listen(PORT,()=>console.log(`Server running on port ${PORT}`));