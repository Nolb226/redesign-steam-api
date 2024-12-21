import express from 'express';
import appRoutes from './apps-service/api/route';

export default function defineRoutes(app: express.Application) {
	const router = express.Router();
	router.use('/apps', appRoutes);
	app.use('/api/v1', router);

	return app;
}
