import bcrypt from "bcrypt";
import { db } from "../services/database.js";

export async function signUp(req, res) {
    const user = req.body;
    const saltRounds = 10;

    const passwordHashed = bcrypt.hashSync(user.password, saltRounds);
    delete user.confirmPassword;

    try {
        const checkExistingEmail = await db.query(`select * from users where email='${user.email}'`);
        const qtdEmail = checkExistingEmail.rows.length;
        if(qtdEmail > 0) return res.status(400).send("Usuário já cadastrado!");
        console.log("Tentei cadastrar!");

        await db.query(`insert into users (username,email,password) values ('${user.name}','${user.email}','${passwordHashed}')`);
        res.status(201).send("Usuário cadastrado com sucesso!");
        console.log("Cadastrado!");
    }catch (error) {
        console.log("Erro no cadastro - back");
        res.status(500).send(error.message);
    }
  }