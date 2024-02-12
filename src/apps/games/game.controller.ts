import { NextFunction, Request, Response } from 'express';

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
}

export default new GameController();
