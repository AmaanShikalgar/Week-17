import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import { Client } from 'pg';

const app = express();
app.use(express.json());

const pgClient = new Client(process.env.DB_URL)

pgClient.connect();

app.post("/signup", async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    try{
        const insertQuery =`INSERT INTO users (username, email, password) VALUES ('${username}','${email}','${password}');`
        await pgClient.query(insertQuery);
        res.json({
            message: "You have signed up"
        })
    }catch(err){
        res.json({
            message: "Erro while signing in"
        })
    }
})

app.listen(3000,function(){
    console.log("server is running")
})