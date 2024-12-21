import { HTTP_CODES } from '@/contants/http-code';

export class AppError extends Error {
	public readonly name: string;
	public readonly httpCodes: HTTP_CODES;
	public readonly isOperational: boolean;

	constructor(
		name: string,
		httpCodes: HTTP_CODES,
		description: string,
		isOperational = true
	) {
		super(description);
		Object.setPrototypeOf(this, new.target.prototype);
		this.name = name;
		this.httpCodes = httpCodes;
		this.isOperational = isOperational;
		Error.captureStackTrace(this);
	}
}
