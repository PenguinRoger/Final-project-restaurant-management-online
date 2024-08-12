import { Express,Router } from 'express'

import healthRoute from './health'
// import apiRoute from './api'


const appRoutes = (app:Express) => {
    const router = Router()

    healthRoute(router);
    // apiRoute(router);

    app.use(process.env.APP_BASE_PATH || "/" ,router)
}



export default appRoutes;