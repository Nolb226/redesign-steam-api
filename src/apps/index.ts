import { Router } from 'express';
import gameRoute from './games/index.js';
import userRoute from './users/index.js';
import mainRoute from './main/index.js';

const route: Router = Router();

route.use('/auth', mainRoute);
route.use('/games', gameRoute);
route.use('/users', userRoute);
export default route;
