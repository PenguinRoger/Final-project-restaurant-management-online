import express, { Express } from 'express'
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

import mssql_db from './db/connection/mssql_database';
// import Models from './models';
import router from './routes'
import expressContext from 'express-request-context';
import socketServer from '@/socket/server';
import socketClient from '@/socket/client';

const app: Express = express();
const httpServer = http.createServer(app);
// const models = new Models(mssql_db);

if(process.env.SOCKET_ENABLED === "true"){
    socketServer(app)
    socketClient()
}

app.use(cors())
app.use(bodyParser.json())
// set model to context
app.use(expressContext())


router(app)

const basepath = process.env.APP_BASE_PATH || ""
const port = process.env.APP_PORT || 4000
const serverStart = async () => {
    await new Promise<void>((resolve) => httpServer.listen({ port: port }, resolve));

    console.log(`🚀 Server ready at http://localhost:${port}${basepath}`);

}

serverStart()