// import { hostname } from 'node:os';
import { Client } from 'pg';

const pgClient = new Client("postgresql://neondb_owner:npg_PElBbv5Ot4ix@ep-lingering-art-atidf1gz-pooler.c-9.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require")

// const pgClient = new Client({
//     user:"neondb_owner",
//     password:"npg_PElBbv5Ot4ix",
//     port:5432,
//     host:"ep-lingering-art-atidf1gz-pooler.c-9.us-east-1.aws.neon.tech",
//     database:"neondb",
//     ssl:true
// })

async function main (){
    await pgClient.connect();
    const response =await pgClient.query("UPDATE users SET username='ishan' WHERE id=3")
    console.log(response.rows)
}

main();