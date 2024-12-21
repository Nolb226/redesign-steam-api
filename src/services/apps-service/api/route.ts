import { Router } from 'express';

import * as queryAppUseCase from '@/services/apps-service/domain/query-app-use-case';

const appRoutes: Router = Router();
appRoutes.get('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const app = await queryAppUseCase.getAppById(id);
		res.status(200).json(app);
	} catch (error) {
		next(error);
	}
});

export default appRoutes;
