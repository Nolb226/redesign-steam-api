export type TGame = {
	name: string;
	release_date: string;
	required_age: number;
	price: number;
	dlc_count: number;
	detailed_description: string;
	about_the_game: string;
	short_description: string;
	reviews: string;
	header_image: string;
	website: string;
	support_url: string;
	support_email: string;
	windows: boolean;
	mac: boolean;
	linux: boolean;
	metacritic_score: number;
	metacritic_url: string;
	achievements: number;
	recommendations: number;
	notes: string;
	supported_languages: string[];
	full_audio_languages: string[];
	packages: TPackage[];
	developers: string[];
	publishers: string[];
	categories: string[];
	genres: string[];
	screenshots: string[];
	movies: string[];
	user_score: 0;
	score_rank: string;
	positive: number;
	negative: number;
	estimated_owners: string;
	average_playtime_forever: number;
	average_playtime_2week: number;
	median_playtime_forever: number;
	peak_ccu: 15;
	tags: { [name: string]: number };
};

export type TTags = {};

type TPackage = {
	title: string;
	description: string;
	subs: TSub[];
};

type TSub = {
	text: string;
	description: string;
	price: number;
};
