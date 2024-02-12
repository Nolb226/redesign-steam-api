import bodyParser from 'body-parser';
import express from 'express';
import route from '../apps';
import handler from '../libraries/ErrorManagement/handler';
import dotenv from 'dotenv';

class App {
	public app: express.Application;
	constructor() {
		this.app = express();
		this.config();
	}

	private config(): void {
		dotenv.config();

		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: true }));
		this.app.use((req, res, next) => {
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.setHeader(
				'Access-Control-Allow-Methods',
				'OPTIONS,GET,POST,PUT,DELETE,PATCH'
			);
			res.setHeader(
				'Access-Control-Allow-Headers',
				'Content-Type,Authorization'
			);
			next();
		});
		this.app.use(`/api/v1`, route);
		this.app.use(handler);
	}
}

export default new App().app;
