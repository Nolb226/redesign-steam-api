import { NextFunction, Request, Response } from 'express';
import authService from './auth.service.js';
import { TLogin, TSignUp } from './auth.type.js';
import userService from '../users/user.service.js';

class AuthController {
	async login(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const payload: TLogin = req.body;
			const information = await authService.login(payload);

			res.status(200).json(information);
		} catch (error) {
			next(error);
		}
	}

	async signup(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const payload: TSignUp = req.body;
			await authService.signup(payload);
			res.status(200).json({
				message: 'Sign up successfully',
			});
		} catch (error) {
			next(error);
		}
	}
	async getUserProfile(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const id = req.userdata?.id;

			const data = await userService.getUserDetail(id);
			res.status(200).json(data);
		} catch (error) {
			next(error);
		}
	}
}

export default new AuthController();
