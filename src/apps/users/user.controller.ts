import { NextFunction, Request, Response } from 'express';
import { HTTP_CODES } from '../../configs/constants.js';
import userService from './user.service.js';
import * as bcrypt from 'bcrypt';

class UserController {
	async getUserDetails(req: Request, res: Response, next: NextFunction) {
		try {
			const { userId } = req.params;

			const user = await userService.getUserDetail(userId);
			res.status(HTTP_CODES.OK).json(user);
		} catch (error) {
			next(error);
		}
	}

	async createUser(req: Request, res: Response, next: NextFunction) {
		try {
			const payload = req.body;
			const hashedPassword = bcrypt.hashSync(payload.password, 10);
			const securedPayload = { ...payload, password: hashedPassword };
			const user = await userService.createUser(securedPayload);
			res.status(HTTP_CODES.OK).json(user);
		} catch (error) {
			next(error);
		}
	}
}

export default new UserController();
