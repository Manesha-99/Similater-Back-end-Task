import express from 'express'
import {port} from './config/config.js'
import { db } from './db/db.js';

const app = express();
app.use(express.json());


db.getConnection((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});


app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});