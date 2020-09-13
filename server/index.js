const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const { response } = require('express');

const apiRouter = express.Router();

app.use(logger('dev', {}));
app.use(bodyParser.json());

apiRouter.post('', (req, res) => {
    const responseBody = {
        result: 'hello world'
    }

    res.send(responseBody)
})

app.listen(4000, function() {
    console.log('Example skill server listening on port 4000!');
});