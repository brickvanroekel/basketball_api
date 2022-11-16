import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import { matchRouter } from './routes/match_router';
import { match } from 'assert';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/match', matchRouter);

app.use('/', matchRouter);

app.get('/status', (req, res) => {
    res.json({ message: 'Web 4 examen backend is running...' });
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000.`);
});
