import { Document } from 'mongoose';
import { TGame } from '../../apps/games/game.type.js';

export type TUser = {
	// _id: string;
	username: String;
	owned: Array<TGame>;
	level: number;
	experience: number;
	summary: String;
	avatar: String;
	real_name: String;
	custom_url: String;
	country: String;
	password: string;
	friends: TUser;
};
