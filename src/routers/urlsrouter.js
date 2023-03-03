import { Router } from "express";
import { validateSchema } from "../middlewares/signupmiddleware.js";
import { urlsSchema } from "../schemas/urlsschema.js";
import {geturl, urlshort} from "../controllers/urlscontroller.js";

const urls = Router();

urls.post("/urls/shorten",validateSchema(urlsSchema),urlshort);
urls.get("/urls/:id",geturl);
urls.get("/urls/open/:shortUrl");
urls.delete("/urls/:id");


export default urls;