import bodyParser from 'body-parser';
import express from 'express';
import dotenv from 'dotenv';
import route from '../apps/index.js';
import handler from '../libraries/ErrorManagement/handler/index.js';
import { getDataBaseConfig } from './db-config.js';
import mongoose from 'mongoose';

class App {
	public app: express.Application;
	constructor() {
		this.app = express();
		this.config();
		this.connectDB();
	}

	private config(): void {
		dotenv.config();

		// this.app.use(bodyParser.urlencoded({ extended: true }));
		// this.app.use(bodyParser.json());
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
		this.app.use(route);
		this.app.use(handler);
	}
	private connectDB(): void {
		// console.log(getDataBaseConfig().mongoDb.connectionURL!);

		mongoose
			.connect(getDataBaseConfig().mongoDb.connectionURL!)
			.then(() => console.log('connected '));
	}
}

export default new App().app;
