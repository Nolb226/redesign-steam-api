import data from '../../__mock__/index.js';
import { TGame } from './game.type.js';

interface IGameModel {
	getById(id: string): Promise<TGame | undefined>;
}

class GameModel implements IGameModel {
	async getById(id: string): Promise<TGame | undefined> {
		const game: TGame = data[id];
		console.log(game);

		return game;
	}
}

export default new GameModel();
