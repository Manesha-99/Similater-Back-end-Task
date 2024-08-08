import jwt from 'jsonwebtoken';
import { jwt_Secret } from '../config/config.js';

const authenticateAdmin = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Access denied..');

  try {
    const decoded = jwt.verify(token, jwt_Secret);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send('Invalid token..');
  }
};

export { authenticateAdmin };