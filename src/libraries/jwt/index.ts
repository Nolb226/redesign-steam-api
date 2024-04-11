import jwt from 'jsonwebtoken';

class JWT {
	signToken(userId: string, expires = '4d'): Promise<string | undefined> {
		return new Promise((resolve, reject) => {
			jwt.sign(
				{
					id: userId,
					iat: Date.now(),
				},
				process.env.SECRET_KEY || '',
				{ expiresIn: expires },
				(err, token) => {
					if (err) {
						reject(err);
					}
					resolve(token);
				}
			);
		});
	}

	verifyToken(token: string): Promise<jwt.JwtPayload | undefined> {
		return new Promise((resolve, reject) => {
			jwt.verify(token, process.env.SECRET_KEY || '', (err, decoded) => {
				if (err) {
					reject(err);
				}
				resolve(decoded as jwt.JwtPayload);
			});
		});
	}
}

export default new JWT();
