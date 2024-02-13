import { BASIC_ERRORS, HTTP_CODES } from '../../configs/constants.js';
import { AppError } from '../../libraries/ErrorManagement/ErrorApp.js';
import gameRepository from './game.repository.js';
import { TCreateApp, TGame } from './game.type.js';

interface IGameService {
	getGameById(id: string): Promise<TGame>;
	createApp(payload: TCreateApp): Promise<TGame>;
	createMultipleApp(payload: TCreateApp[]): Promise<TGame[]>;
}

class GameService implements IGameService {
	async getGameById(id: string): Promise<TGame> {
		const game = await gameRepository.getById(id);

		if (!game) {
			throw new AppError(
				BASIC_ERRORS.RESOURCE_NOT_FOUND,
				HTTP_CODES.NOT_FOUND,
				'Game not found'
			);
		}

		return game;
	}
	async createApp(payload: TCreateApp): Promise<TGame> {
		return await gameRepository.createApp(payload);
	}

	async createMultipleApp(payload: TCreateApp[]): Promise<TGame[]> {
		return await gameRepository.createMultipleApp(payload);
	}
}

export default new GameService();
