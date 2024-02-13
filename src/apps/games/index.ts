import { Router } from 'express';
import gameController from './game.controller.js';

const gameRoute: Router = Router();

gameRoute
	.route('/')
	.get(gameController.getGames)
	.post(gameController.createApp);

gameRoute.route('/many').post(gameController.createMultipleApp);

gameRoute.route('/:gameId').get(gameController.getGameById);

export default gameRoute;
