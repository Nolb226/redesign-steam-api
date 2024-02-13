import dotenv from 'dotenv';
dotenv.config();
export const getDataBaseConfig = () => {
	const dbName = process.env.MONGODB_DB_NAME || 'Steam';

	return {
		mongoDb: {
			connectionURL: process.env.MONGODB_URL,

			dbName: dbName,
		},
	};
};
