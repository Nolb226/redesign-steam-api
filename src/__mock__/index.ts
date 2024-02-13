import { TGame } from '../apps/games/game.type.js';
import data from './games.json' with {type: "json"};

type Tdata = {
	[key: string]: TGame;
};

export default data as Tdata;
