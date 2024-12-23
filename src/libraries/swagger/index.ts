// Purpose: Defines the Swagger specification for the API.
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';
export function defineSwaggerSpec(app: express.Application) {
	const swaggerDefinition = {
		openapi: '3.0.0',
		info: {
			title: 'Express API for Steam Apps',
			version: '1.0.0',
			description:
				' This is a RESTful API for Steam Apps. It is built with Express and TypeScript.',
			license: {
				name: 'Licensed Under MIT',
				url: 'https://spdx.org/licenses/MIT.html',
			},
			contact: {
				name: 'JSONPlaceholder',
				url: 'https://jsonplaceholder.typicode.com',
			},
		},
		servers: [
			{
				url: 'http://localhost:8080/api/v1',
				description: 'Development server',
			},
		],
	};

	const options = {
		swaggerDefinition,
		apis: ['./src/services/apps-service/api/route.ts'],
	};
	const swaggerSpec = swaggerJSDoc(options);
	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
