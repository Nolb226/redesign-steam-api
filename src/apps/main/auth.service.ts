import { AppError } from '../../libraries/ErrorManagement/ErrorApp.js';
import { TUser } from '../../types/user/index.js';
import * as bcrypt from 'bcrypt';
import { TLogin } from './auth.type.js';
import { SignUpPayload } from '../users/user.type.js';
import { BASIC_ERRORS, HTTP_CODES } from '../../configs/constants.js';
import userRepository from '../users/user.repository.js';
import jwt from '../../libraries/jwt/index.js';

interface IAuthService {
	login(payload: TLogin): Promise<{ token: string } & TUser>;
	signup(payload: SignUpPayload): Promise<TUser>;
}

class AuthService implements IAuthService {
	async login(payload: TLogin): Promise<{ token: string } & TUser> {
		const user = await userRepository.getUserByUsername(
			payload.username.toLowerCase()
		);

		if (!user) {
			throw new AppError(
				BASIC_ERRORS.RESOURCE_NOT_FOUND,
				HTTP_CODES.NOT_FOUND,
				'username and password is not match '
			);
		}

		const token = (await jwt.signToken(user._id)) as string;
		const securedUser = user.toJSON();
		delete securedUser.password;
		const information = { token, ...(securedUser as TUser) };

		return information;
	}

	async signup(payload: SignUpPayload): Promise<TUser> {
		const user = await userRepository.getUserByUsername(payload.username);
		if (user) {
			throw new AppError(
				BASIC_ERRORS.CONFLICT,
				HTTP_CODES.CREATED,
				'Username is already in use'
			);
		}

		const hashedPassword = bcrypt.hashSync(payload.password, 10);

		return userRepository.createUser({
			...payload,
			password: hashedPassword,
		});
	}
}

export default new AuthService();
