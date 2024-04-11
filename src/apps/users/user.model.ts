import mongoose, { Document, Schema } from 'mongoose';
import { TUser } from '../../types/user/index.js';

export interface IUser extends TUser, Document {}

const userSchema = new Schema<IUser>({
	username: {
		type: String,
		require: [true, "Username can't be blank"],
	},
	password: { type: String, require: [true, 'Password is required'] },
	owned: [{ type: Schema.Types.ObjectId, ref: 'Apps' }],
	level: { type: Number, default: 1 },
	experience: { type: Number, default: 0 },
	summary: { type: String, default: 'No information given.' },
	avatar: String,
	real_name: String,
	custom_url: String,
	country: String,
	friends: [{ type: Schema.Types.ObjectId, ref: 'Users' }],
});

export default mongoose.model('Users', userSchema);
