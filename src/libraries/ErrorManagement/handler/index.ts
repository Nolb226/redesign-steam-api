import { NextFunction, Request, Response } from 'express';
import { AppError } from '../ErrorApp.js';
import Logger from '../../Logger/index.js';

const isTrustedError = (err: Error) => {
	if (err instanceof AppError) {
		return err.isOperational;
	}
	return false;
};

export default (
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
		stack: err.stack,
	};
	console.log(err);

	if (isTrustedError(err)) {
		Logger.info(logs);
	} else {
		Logger.error(logs);
	}
	const message = { message: err.message };
	res
		.status(err instanceof AppError ? err.httpCodes : 422)
		.json(process.env.NODE_ENV !== 'production' ? logs : message);
};
