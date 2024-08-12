import { Router } from 'express'

const routes = (router:Router):Router => {
    router.get('/health', (req,res) => {
        res.status(200).send('Ok');
    })
    
    return router
}

export default routes