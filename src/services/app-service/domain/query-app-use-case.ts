import { BASIC_ERRORS, HTTP_CODES } from '@/contants/http-code';
import { AppError } from '@/libraries/error-handling/app-error';
import * as appRepository from '@/services/app-service/data-access/app-repository';

export async function getAppById(id: string) {
	const response = await appRepository.getAppById(id);
	if (!response) {
		throw new AppError(
			BASIC_ERRORS.RESOURCE_NOT_FOUND,
			HTTP_CODES.NOT_FOUND,
			`App with id ${id} not found`
		);
	}
	return response;
}

export async function getAllApp(
	page?: number,
	size?: number,
	genres?: string[] | 'all'
) {
	const response = await appRepository.getAllApp(page, size, genres);
	return response;
}

export async function searchApp(query: string) {
	const response = await appRepository.searchApp(query);
	return response;
}
