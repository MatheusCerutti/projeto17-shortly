import { db } from "../services/database.js";
import { nanoid } from "nanoid";

export async function urlshort(req,res) {
   const {url} = req.body;
   const shorturl = nanoid(10);
   try {

    await db.query(`insert into urls (url,url_short) values ('${url}','${shorturl}')`);
    res.status(201).send(res.body);

   } catch (error) {
    console.log("Erro");
    res.status(500).send(error.message);
   }
}


export async function geturl(req,res){
    const {id} = req.params;

    try {
    
    const consulta = await db.query(`select * from urls where id=${id}`);

    const dados = consulta.rows[0];

    res.status(200).send(dados);

    } catch (error) {
        console.log("Erro");
        res.status(500).send(error.message);
    }

    
}

