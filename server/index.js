const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

const apiRouter = express.Router();

app.use(logger('dev', {}));
app.use(bodyParser.json());
app.use('/api', apiRouter);
//이 코드의 결과로, ‘/api/**’로 시작하는 모든 요청은 apiRouter에게 전달됩니다.

apiRouter.post('/sayHello', function(req, res) {
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text: "hello I'm hotplace"
                    }
                }
            ]
        }
    };

    res.status(200).send(responseBody)
});

apiRouter.post('/showHello', function(req, res) {
    console.log(req.body);

    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleImage: {
                        imageUrl: "https://t1.daumcdn.net/friends/prod/category/M001_friends_ryan2.jpg",
                        altText: "hello I'm hotplace"
                    }
                }
            ]
        }
    };

    res.status(200).send(responseBody);
});

app.listen(4000, function() {
    console.log('Example skill server listening on port 4000!');
});