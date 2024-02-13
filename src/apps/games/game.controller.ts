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

			const game = await gameService.getGameById(gameId);
			res.status(HTTP_CODES.OK).json(game);
		} catch (error) {
			next(error);
		}
	}

	async createApp(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const payload = req.body;
			console.log(payload);

			const game = await gameService.createApp(payload);
			res.status(HTTP_CODES.OK).json({ message: 'done' });
		} catch (error) {
			next(error);
		}
	}

	async createMultipleApp(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const payload = req.body;

			const game = await gameService.createMultipleApp(payload);
			res.status(HTTP_CODES.OK).json({ message: 'done' });
		} catch (error) {
			next(error);
		}
	}
}

export default new GameController();
