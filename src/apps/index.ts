import { Router } from 'express';
import gameRoute from './games';

const route: Router = Router();

route.use('/games', gameRoute);

export default route;
