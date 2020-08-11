import express from 'express';
import cors from 'cors';

import routes from './routes';
import db from './database/connection';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);