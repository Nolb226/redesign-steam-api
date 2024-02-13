import { TGame } from '../apps/games/game.type.js';
import data from './games.json' assert { type: 'json' };

type Tdata = {
	[key: string]: TGame;
};

export default data as Tdata;
