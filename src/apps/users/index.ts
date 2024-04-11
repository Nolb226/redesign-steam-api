import { Router } from 'express';
import { Validate } from '../../libraries/validator/index.js';
import { userRequirement } from './user.requirement.js';
import userController from './user.controller.js';

const userRoute: Router = Router();

userRoute
	.route('/')
	.post(Validate(userRequirement.createUser), userController.createUser);

userRoute.route('/:userId').get(userController.getUserDetails);

export default userRoute;
