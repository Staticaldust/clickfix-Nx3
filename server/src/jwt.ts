import jwt from 'jsonwebtoken';
const secretKey = process.env.JWT_SECRET;

const verifyJWT = async (token: string) => {
  try {
    const decodedToken = jwt.verify(token, secretKey);
    return decodedToken;
  } catch (error) {
    console.error('Error decoding/verifying JWT token:', error);
    throw new Error('Invalid JWT token');
  }
};

export default verifyJWT;
