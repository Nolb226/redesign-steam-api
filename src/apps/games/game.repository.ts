import gameModel from './game.model.js';
import { TCreateApp, TGame } from './game.type.js';

interface IGameRepository {
	getAllApp(): Promise<TGame[]>;
	getById(id: string): Promise<TGame | null>;
	createApp(payload: TCreateApp): Promise<TGame>;
	createMultipleApp(payload: TCreateApp[]): Promise<TGame[]>;
}

class GameRepository implements IGameRepository {
	async getAllApp(): Promise<TGame[]> {
		return await gameModel
			.find()
			.select([
				'id',
				'name',
				'header_image',
				'tags',
				'windows',
				'linux',
				'mac',
				'release_date',
				'price',
			]);
	}

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
