import express, { Express } from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

// Assuming mssql_db is a valid module
// import mssql_db from './db/connection/mssql_database';
import Models from './models';
import router from './routes';
import contextMiddleware from './routes/contextMiddleware';
import logMiddleware from './routes/logMiddleware';
import expressContext from 'express-request-context';

const app: Express = express();
const httpServer = http.createServer(app);

// const models = new Models(mssql_db);

// Assuming SOCKET_ENABLED is defined in .env
// if (process.env.SOCKET_ENABLED === "true") {
//     // Assuming socketServer and socketClient are valid functions
//     socketServer(app);
//     socketClient();
// }

app.use(cors());
app.use(bodyParser.json());
// set model to context
app.use(expressContext());
app.use(logMiddleware);
// app.use(contextMiddleware(models));

router(app);

const basepath = process.env.APP_BASE_PATH || "";
const port = process.env.APP_PORT || 4000;

const serverStart = async () => {
    await new Promise<void>((resolve) => httpServer.listen({ port: port }, resolve));

    console.log(`🚀 Server ready at http://localhost:${port}${basepath}`);

    // Assuming socket is a valid variable
    // const socket = io('http://localhost:4001');

    // Assuming new_noti is a valid event
    // setInterval(() => {
    //     socket.emit('new_noti', {
    //         subject: 'Test Send Noti',
    //         payload: {
    //             message: 'Hi 55555',
    //         },
    //         resiver: 10,
    //     });
    // }, 1000 * 10);
};

serverStart();