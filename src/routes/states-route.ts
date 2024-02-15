import {Router} from 'express';

import StatesBusinessManager from "../business-managers/states-business-manager";
import { TYPES } from "../inversify/types";
import container from '../inversify/config';

const router = Router();

const statesBusinessManager = container.get<StatesBusinessManager>(TYPES.StatesBusinessManager);

router.get('/', (req: any, res: any) => {
    const states = statesBusinessManager.getStates(req.query.state_string);
    res.status(200).send(states);
});

module.exports = router;