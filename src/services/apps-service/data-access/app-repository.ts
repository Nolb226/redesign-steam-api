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
	size: number = 10
): Promise<[any[], number]> {
	const resultApps = await prisma.apps.findMany({
		skip: (page - 1) * size,
		take: size,
	});
	const totalApps = await prisma.apps.count();

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
