import { Router } from 'express';
import gameController from './game.controller';

const gameRoute: Router = Router();

gameRoute.route('/').get(gameController.getGames);

export default gameRoute;
