import { Router } from 'express';
import gameController from './game.controller.js';

const gameRoute: Router = Router();

gameRoute.route('/').get(gameController.getGames);

gameRoute.route('/:gameId').get(gameController.getGameById);

export default gameRoute;
