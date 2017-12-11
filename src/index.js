import express from 'express';
import api from './routes/api';
import config from './config/app';
import bodyParser from 'body-parser';
import * as handlers from './middlewares/handlers';

const app = express();

app.use(bodyParser.json());
app.use('/api', api);

app.use(handlers.convertExceptionToHTMLResponse);

app.listen(config.APP_PORT, config.APP_HOST, () => {
  console.log(`Server started at http://${config.APP_HOST}:${config.APP_PORT}`);
});
