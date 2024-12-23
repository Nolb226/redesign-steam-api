import cors from 'cors';
import express, { type Express } from 'express';
import helmet from 'helmet';
import defineRoutes from './services';
import { errorHandler } from './libraries/error-handling';
import morgan from 'morgan';

// // Set the application to trust the reverse proxy
// app.set('trust proxy', true);

export const createServer = (): Express => {
	const app: Express = express();
	app
		.use(express.json())
		.use(express.urlencoded({ extended: true }))
		.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }))
		.use(helmet())
		.use(morgan('combined'));
	defineRoutes(app);
	app.use(errorHandler.handler);
	return app;
};
// Middlewares

// Request logging
// app.use(requestLogger);

// // Routes
// app.use("/health-check", healthCheckRouter);
// app.use("/users", userRouter);

// // Swagger UI
// app.use(openAPIRouter);

// // Error handlers
// app.use(errorHandler());

// export { app, logger };
