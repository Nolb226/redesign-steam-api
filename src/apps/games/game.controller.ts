import { NextFunction, Request, Response } from 'express';
import gameService from './game.service.js';
import { HTTP_CODES } from '../../configs/constants.js';

class GameController {
	async getGames(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			res.status(200).json({ message: 'test' });
		} catch (error) {
			next(error);
		}
	}

	async getGameById(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const { gameId } = req.params;

			console.log(gameId);

			const game = await gameService.getGameById(gameId);
			res.status(HTTP_CODES.OK).json({ id: gameId, ...game });
		} catch (error) {
			next(error);
		}
	}
}

export default new GameController();
