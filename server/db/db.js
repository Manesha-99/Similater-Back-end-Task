import mysql2 from 'mysql2';
import { dbConfig } from '../config/config.js';

const db = mysql2.createPool(dbConfig);

export {db};

