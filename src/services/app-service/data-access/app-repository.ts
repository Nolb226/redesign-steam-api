import prisma from '@/libraries/database';

export async function getAppById(id: string) {
	const resultApp = await prisma.apps.findFirst({
		where: {
			id_: id,
		},
	});

	return resultApp;
}

export async function getAllApp(
	page: number = 1,
	size: number = 10,
	genres?: string[] | 'all'
): Promise<[any[], number]> {
	const resultApps = (await prisma.apps.findRaw({
		filter: {
			...(genres !== 'all' && {
				genres: {
					$in: genres,
				},
			}),
		},
		options: {
			limit: size,
			offset: (page - 1) * size,
		},
	})) as unknown as any[];
	const totalApps = await prisma.apps.count({
		where: {
			...(genres !== 'all' && {
				genres: {
					hasSome: genres,
				},
			}),
		},
	});

	return [resultApps, totalApps];
}

export async function searchApp(query: string) {
	const resultApps = await prisma.apps.findMany({
		where: {
			name: {
				contains: query,
				mode: 'insensitive',
			},
		},
	});
	return resultApps;
}
