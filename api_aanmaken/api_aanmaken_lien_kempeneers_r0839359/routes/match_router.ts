import express, { Request, Response, Handler } from 'express';
import * as matchModel from '../model/match';
import { Match } from '../types';

const matchRouter = express.Router();

matchRouter.get('/', (req: Request, res: Response) => {
    matchModel.getAllMatches((err: Error, matches: Match[]) => {
        if (err) {
            res.status(500).json({ status: 'error', errorMessage: err.message });
        } else {
            res.status(200).json(matches);
        }
    });
});

matchRouter.post('/', (req: Request, res: Response) => {
    const match = <Match>req.body;
    matchModel.addMatch(match, (err: Error) => {
        if (err) {
            res.status(500).json({ status: 'error', errorMessage: err.message });
        } else {
            res.status(200).json({ status: 'success' });
        }
    });
});

matchRouter.delete('/match/:id', (req: Request, res: Response) => {
    let id = parseInt(req.params.id);
    matchRouter.deleteMatch(id, (err: Error, id: Number) => {
        if (err) {
            res.status(500).json({ status: 'error', errorMessage: err.message});
        } else {
            res.status(200).json({ status: 'succes', id: id})
        }
    })
})

export { matchRouter };
