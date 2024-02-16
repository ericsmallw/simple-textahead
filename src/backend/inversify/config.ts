import { Container } from "inversify";
import "reflect-metadata";
import {TYPES} from "./types";

import StatesDao from "../data-access-objects/states-dao";
import IStatesDao from "../data-access-objects/i-states-dao";
import StatesBusinessManager from "../business-managers/states-business-manager";
import IStatesBusinessManager from "../business-managers/i-states-business-manager";

const container = new Container();
container.bind<IStatesDao>(TYPES.StatesDao).to(StatesDao);
container.bind<IStatesBusinessManager>(TYPES.StatesBusinessManager).to(StatesBusinessManager);

export default container;