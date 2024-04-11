import { NextFunction, Request, Response } from 'express';
import { AppError } from '../ErrorManagement/ErrorApp.js';
import { BASIC_ERRORS, HTTP_CODES } from '../../configs/constants.js';
import jwt from '../jwt/index.js';
import userRepository from '../../apps/users/user.repository.js';

class Auth {
	async authenticate(req: Request, res: Response, next: NextFunction) {
		try {
			const authorization: string | undefined = req.headers.authorization;
			if (!authorization) {
				throw new AppError(
					BASIC_ERRORS.UNAUTHORIZED,
					HTTP_CODES.UNAUTHORIZED,
					'Authorization is not provided'
				);
			}

			const token = authorization.split(' ')[1];

			if (!token) {
				throw new AppError(
					BASIC_ERRORS.UNAUTHORIZED,
					HTTP_CODES.UNAUTHORIZED,
					'Invalid authorization'
				);
			}

			const payload = await jwt.verifyToken(token);

			if (!payload) {
				throw new AppError(
					BASIC_ERRORS.UNAUTHORIZED,
					HTTP_CODES.UNAUTHORIZED,
					'Invalid token'
				);
			}

			const userId: string = payload.id;
			const userdata = await userRepository.getUserDetail(userId);

			if (!userdata) {
				res.sendStatus(401);
				return;
			}

			req.userdata = userdata;
			next();
		} catch (error) {
			next(error);
		}
	}
}

export default new Auth();
