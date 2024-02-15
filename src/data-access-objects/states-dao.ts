import { injectable } from 'inversify';

import IStatesDao from './i-states-dao';

import {STATES} from '../constants/states';

@injectable()
export default class StateDao implements IStatesDao {

    public getStates(state_string:string): string[] {
        return STATES.filter(
            (state) => state.toLowerCase().includes(state_string.toLowerCase())
        );
    }
}   