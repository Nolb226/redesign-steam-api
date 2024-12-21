import type { NextFunction, Request, Response } from 'express';
import { Logger } from '../logger';
import { AppError } from './app-error';

const isTrustedError = (err: Error) => {
	if (err instanceof AppError) {
		return err.isOperational;
	}
	return false;
};

export const errorHandler = {
	handler: (
		err: Error | AppError,
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		const logs = {
			type: err.name,
			message: err.message,
			method: req.method,
			path: req.path,
			param: req.route.params,
			body: req.body,
			query: req.query,
			...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
		};
		console.log(err);

		if (isTrustedError(err)) {
			Logger.info(err.name);
		} else {
			Logger.error(err.name);
		}
		const message = { message: err.message };
		res
			.status(err instanceof AppError ? err.httpCodes : 422)
			.json(process.env.NODE_ENV !== 'production' ? logs : message);
	},
};
