import winston from 'winston';

const logger = winston.createLogger({
    transports: [
        // new winston.transports.Console(),
        new winston.transports.File({
            filename: 'combined.log'
        }),
    ],
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    )
});

const logMiddleware = async (req, res, next) => {
    if (req.method === 'GET') {
        return next();
    }
    const log = {
        method: req.method,
        parth: req.path,
        payloads: req.body,
        headers: req.headers
    };
    logger.info(log);
    next();
}

export default logMiddleware;