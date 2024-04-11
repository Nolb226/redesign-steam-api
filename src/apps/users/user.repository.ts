import { Types } from 'mongoose';
import { TUser } from '../../types/user/index.js';
import userModel, { IUser } from './user.model.js';
import { SignUpPayload } from './user.type.js';

interface IUserRepository {
	createUser(payload: SignUpPayload): Promise<TUser>;
	getUserByUsername(username: string): Promise<TUser | null>;
	getUserProfile(url: String): Promise<TUser | null>;
	getUserDetail(id: String): Promise<IUser | null>;
}

class UserRepository implements IUserRepository {
	async createUser(payload: SignUpPayload): Promise<TUser> {
		return await userModel.create(payload);
	}
	async getUserByUsername(username: String): Promise<IUser | null> {
		return await userModel.findOne({ username }).exec();
	}
	async getUserProfile(identifier: String): Promise<TUser | null> {
		const objId = new Types.ObjectId(identifier as string);
		return await userModel
			.findOne({ $or: [{ custom_url: identifier }, { _id: objId }] })
			.populate('owned', 'name header_image')
			.exec();
	}
	async getUserDetail(id: String): Promise<IUser | null> {
		return await userModel.findById(id).exec();
	}
}

export default new UserRepository();
