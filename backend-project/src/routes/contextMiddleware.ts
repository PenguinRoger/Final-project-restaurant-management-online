import Models from '@/models';
import userUsecase from '@/use_case/userUsecase'

const contextMiddleware = (models:Models) => {
    return async (req, res, next) => {
        const token = req.headers["authorization"]?.replace("Bearer ","")
        const user = await userUsecase.getUserFromToken(models,token)
        // if(user==null){
        //     return res.status(401).send("Invalid Token");
        // }

        req.context.models = models
        req.context.user = user
        next()
    }
}

export default contextMiddleware