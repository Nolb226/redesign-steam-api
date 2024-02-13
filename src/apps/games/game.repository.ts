import gameModel from './game.model.js';
import { TGame } from './game.type.js';

interface IGameRepository {
	getById(id: string): Promise<TGame | undefined>;
}

class GameRepository implements IGameRepository {
	async getById(id: string): Promise<TGame | undefined> {
		return await gameModel.getById(id);
	}
}

export default new GameRepository();
