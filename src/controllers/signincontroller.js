import bcrypt from "bcrypt";
import { v4 as uuid } from 'uuid';
import { db } from "../services/database.js";

export default async function login(req,res) {

    const { email, password } = req.body

    try {
        const validateEmail = await db.query(`select id,password from users where email ='${email}'`);
        if(validateEmail.rows.length > 0) {
            const id = validateEmail.rows[0].id;
            console.log(id);
            const senha = validateEmail.rows[0].password;
            console.log(senha);

            if (bcrypt.compareSync(password, senha)) {
                const token = uuid();
        
                await db.query(`insert into session (id_username,token) values ('${id}','${token}')`);
                res.status(201).send(token)
            } else {
                return res.status(422).send("email ou senha incorretos")
            }
        } else {
            res.status(422).send("email ou senha incorreto");
        }


        
    } catch (error) {
        console.log("Erro");
        res.status(500).send(error.message);
    }
}