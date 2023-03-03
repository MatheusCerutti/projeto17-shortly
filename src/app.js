import express from "express";
import cors from "cors";
import signin from "./routers/signinrouter.js";
import signup from "./routers/signuprouter.js";

const server = express();
server.use(express.json());
server.use(cors());

const PORT = Number(process.env.PORT) || 5000;

server.use(signin)
server.use(signup)

server.listen(PORT,()=>console.log(`Server running on port ${PORT}`));