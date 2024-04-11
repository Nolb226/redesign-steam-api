import { body } from 'express-validator';

export const userRequirement = {
	createUser: [
		body('username')
			.trim()
			.toLowerCase()
			.notEmpty()
			.withMessage('Invalid payload'),
		body('password')
			.trim()
			.toLowerCase()
			.notEmpty()
			.withMessage('Invalid payload'),
	],
};
