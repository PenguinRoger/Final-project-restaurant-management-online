import { machine } from "os";
import { Server } from "socket.io";
import socketUscase from '@/use_case/socketUsecase'

const socketServer = (app) => {
    app.set("etag", false)
    app.set("x-powered-by", false);

    const io = new Server(app.listen(4001, () => {
        console.log(`🔊🔊 socket.io noti start on port 4001 🔊🔊`)
    }), {
        cors: {
            origin: ["http://localhost:3000", "http://127.0.0.1:3000", "http://localhost:3001"],
            methods: ["GET", "POST"]
        },
        maxHttpBufferSize: 1e8 // 100 MB
    })

    io.on('connection', (socket) => {
        console.log('A user connected');

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });

        socket.on('subscribe', socketUscase.joinNoti({io, socket}))
        socket.on('noti:send', socketUscase.sendNoti({io, socket}))
    });
}

export default socketServer