import { Router } from 'express';

import * as queryAppUseCase from '@/services/apps-service/domain/query-app-use-case';
import { AppError } from '@/libraries/error-handling/app-error';
import { BASIC_ERRORS, HTTP_CODES } from '@/contants/http-code';

const appRoutes: Router = Router();

appRoutes.get('/', async (req, res, next) => {
	try {
		const page = parseInt(req.query.page as string) || 1;
		const size = parseInt(req.query.size as string) || 10;
		const [apps, totals] = await queryAppUseCase.getAllApp(page, size);
		const totalPages = Math.ceil(totals / size);
		res.status(200).json({ page, size, apps, totals, totalPages });
	} catch (error) {
		next(error);
	}
});

appRoutes.get('/search', async (req, res, next) => {
	try {
		const searchQuery = req.query.q as string;
		if (!searchQuery) {
			throw new AppError(
				BASIC_ERRORS.INVALID_REQUEST,
				HTTP_CODES.BAD_REQUEST,
				'Search query is required'
			);
		}
		const apps = await queryAppUseCase.searchApp(
			searchQuery.toLocaleLowerCase()
		);
		res.status(200).json(apps);
	} catch (error) {
		next(error);
	}
});
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
