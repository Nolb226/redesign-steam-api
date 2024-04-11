import { Router } from 'express';
import authController from './auth.controller.js';
import authenticate from '../../libraries/authenticate/index.js';

const mainRoute: Router = Router();

mainRoute.route('/login').post(authController.login);

mainRoute.route('/signup').post(authController.signup);

mainRoute
	.route('/user_profiles')
	.get(authenticate.authenticate, authController.getUserProfile);

export default mainRoute;
