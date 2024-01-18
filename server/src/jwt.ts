import * as jwt from 'jsonwebtoken';

const decodeAndVerifyJwtToken = async (token: string): Promise<any> => {
  try {
    const secretKey = process.env.JWT_SECRET;

    const decodedToken = jwt.verify(token, secretKey);

    return decodedToken;
  } catch (error) {
    console.error('Error decoding/verifying JWT token:', error);
    throw new Error('Invalid JWT token');
  }
};

export { decodeAndVerifyJwtToken };
