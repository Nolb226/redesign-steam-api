export enum HTTP_CODES {
	OK = 200,
	CREATED = 201,
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	FORBIDDEN = 403,
	NOT_FOUND = 404,
	METHOD_NOT_ALLOWED = 405,
	CONFLICT = 409,
	INTERNAL_SERVER_ERROR = 500,
}
export enum BASIC_ERRORS {
	SUCCESS = 'Success',
	INVALID_REQUEST = 'Invalid request',
	UNAUTHORIZED = 'Unauthorized',
	FORBIDDEN = 'Forbidden',
	RESOURCE_NOT_FOUND = 'Resource not found',
	CONFLICT = 'Already exists',
	INTERNAL_SERVER_ERROR = 'Internal server error',
}
