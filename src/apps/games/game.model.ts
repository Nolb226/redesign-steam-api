import mongoose, { Document } from 'mongoose';
import { Schema } from 'mongoose';
import { IRequirements, TGame, TPackage } from './game.type.js';

interface IGame extends TGame {}

const gameSchema = new Schema<IGame>({
	id: String,
	about_the_game: String,
	website: String,
	achievements: Number,
	average_playtime_2week: Number,
	average_playtime_forever: Number,
	categories: Array<String>,
	detailed_description: String,
	developers: Array<String>,
	dlc_count: Number,
	estimated_owners: String,
	full_audio_languages: Array<String>,
	genres: Array<String>,
	header_image: String,
	linux: Boolean,
	mac: Boolean,
	median_playtime_forever: Number,
	metacritic_score: Number,
	metacritic_url: String,
	movies: Array<String>,
	name: String,
	negative: Number,
	notes: String,
	packages: Array<TPackage>,
	peak_ccu: Number,
	positive: Number,
	price: Number,
	publishers: Array<String>,
	recommendations: Number,
	release_date: Date,
	required_age: Number,
	reviews: String,
	score_rank: String,
	screenshots: Array<String>,
	short_description: String,
	support_email: String,
	support_url: String,
	supported_languages: Array<String>,
	tags: { type: Map, of: Number },
	user_score: Number,
	windows: Boolean,
	background: String,
	pc_requirements: {
		minimum: String,
		recommended: String,
	},
	mac_requirements: {
		minimum: String,
		recommended: String,
	},
	linux_requirements: {
		minimum: String,
		recommended: String,
	},
});

export default mongoose.model('Apps', gameSchema);
