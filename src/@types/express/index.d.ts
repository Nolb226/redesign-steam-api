import 'express';
import { IUser } from '../../apps/users/user.model.ts';

declare global {
	namespace Express {
		export interface Request {
			userdata?: IUser;
		}
	}
}
