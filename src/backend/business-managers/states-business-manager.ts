import { injectable, inject } from 'inversify';

import { TYPES } from '../inversify/types';
import IStatesDao from '../data-access-objects/i-states-dao';

@injectable()
export default class StatesBusinessManager {
    private statesDao: IStatesDao;

    constructor(@inject(TYPES.StatesDao) statesDao: IStatesDao) {
        this.statesDao = statesDao;
    }

    public getStates(state_string: string): string[] {
        return this.statesDao.getStates(state_string).sort().slice(0, 8);
    }

}