import prisma from '@/libraries/database';

type AppRecord = {};

export async function getAppById(id: string) {
	const resultApp = await prisma.apps.findFirst({
		where: {
			id_: id,
		},
	});

	return resultApp;
}
