import { BASIC_ERRORS, HTTP_CODES } from '../../configs/constants.js';
import { AppError } from '../../libraries/ErrorManagement/ErrorApp.js';
import { TUser } from '../../types/user/index.js';
import userModel from './user.model.js';
import userRepository from './user.repository.js';
import { SignUpPayload } from './user.type.js';
import { Types } from 'mongoose';

interface IUserService {
	getUserDetail(identifier: string): Promise<TUser>;
	createUser(payload: SignUpPayload): Promise<TUser>;
}

class UserService implements IUserService {
	async getUserDetail(identifier: string): Promise<TUser> {
		const user = await userRepository.getUserProfile(identifier);

		if (!user) {
			throw new AppError(
				BASIC_ERRORS.RESOURCE_NOT_FOUND,
				HTTP_CODES.NOT_FOUND,
				'No user'
			);
		}
		return user;
	}
	async createUser(payload: SignUpPayload): Promise<TUser> {
		return await userModel.create(payload);
	}
}

export default new UserService();
