import { Express,Router } from 'express'

import healthRoute from './health'
import apiRoute from './api'
import adminRoute from './admin'
import contextMiddleware from './contextMiddleware'

const appRoutes = (app:Express) => {
    const router = Router()

    healthRoute(router);
    apiRoute(router);
    adminRoute(router);

    app.use(process.env.APP_BASE_PATH || "/" ,router)
}

export {
    contextMiddleware
};

export default appRoutes;