// express 형태

// const의 경우 let과 동일한 역할을 하지만 고정될 값을 쓸때 이렇게 사용한다.
const http = require('http');
const express = require('express');

const port = 3000;
const app = express();
const router = express.Router();

//router 만들기
app.use('/', router.get('/', function(req, res){
    // HTML 응답
    res.send('Hello World');
}));

//서버 객체를 하나 생성
const server = http.createServer(app);

server.on('error', onError);
server.on('listen', onListening);
// 실행
server.listen(port);

function onError(error){
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
};
function onListening(){
    const addr = server.address();
    const bind = (typeof addr ==='string') ? 'pipe ' +addr : 'port ' + addr.port;
    console.log(bind);
};

