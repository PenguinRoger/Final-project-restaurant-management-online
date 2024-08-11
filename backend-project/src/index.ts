import express, { Express } from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

// Assuming mysql_db is a valid module
import mysql_db from './db/connection/mysql_database';
import Models from './models';
import router from './routes';
import expressContext from 'express-request-context';

const app: Express = express();
const httpServer = http.createServer(app);
const models = new Models(mysql_db);


app.use(cors());
app.use(bodyParser.json());
app.use(expressContext());

router(app);

const basepath = process.env.APP_BASE_PATH || "";
const port = process.env.APP_PORT || 4000;

const serverStart = async () => {
    await new Promise<void>((resolve) => httpServer.listen({ port: port }, resolve));

    console.log(`🚀 Server ready at http://localhost:${port}${basepath}`);

};

serverStart();  