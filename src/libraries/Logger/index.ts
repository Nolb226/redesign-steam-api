import * as winston from 'winston';

const levels = {
	error: 0,
	warn: 1,
	info: 2,
	http: 3,
	verbose: 4,
	debug: 5,
	silly: 6,
};

const colors = {
	error: 'red',
	warn: 'yellow',
	info: 'cyan',
	http: 'magenta',
	debug: 'green',
	GET: 'green',
};

winston.addColors(colors);

const format = winston.format.combine(
	winston.format.timestamp({
		format: 'YYYY-MM-DD HH:mm:ss',
	}),
	winston.format.colorize({ all: true }),
	winston.format.printf(
		(info) =>
			`${info.timestamp} ${info.method} ${info.path} ${info.type} ${
				info.level
			} ${info.message} \n\t ${JSON.stringify(info.body)}`
	)
);

const transports = [
	new winston.transports.Console(),
	new winston.transports.File({
		filename: 'logs/error.log',
		level: 'error',
	}),
	new winston.transports.File({ filename: 'logs/all/log' }),
];

const Logger = winston.createLogger({
	level: 'info',
	levels,
	format,
	transports,
});

export default Logger;
