import gameModel from './game.model.js';
import { TCreateApp, TGame } from './game.type.js';

interface IGameRepository {
	getById(id: string): Promise<TGame | null>;
	createApp(payload: TCreateApp): Promise<TGame>;
}

class GameRepository implements IGameRepository {
	async getById(id: string): Promise<TGame | null> {
		return await gameModel.findOne({ id }).exec();
	}
	async createApp(payload: TCreateApp): Promise<TGame> {
		return await gameModel.create(payload);
	}

	async createMultipleApp(payload: TCreateApp[]): Promise<TGame[]> {
		return await gameModel.insertMany(payload);
	}
}

export default new GameRepository();
