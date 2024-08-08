import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { db } from '../db/db.js';
import { jwt_Secret } from '../config/config.js';

// ----------------------User login-------------------------------

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [results] = await db.execute('SELECT * FROM user_details WHERE email = ?', [email]);
    if (results.length === 0) return res.status(400).send('Wrong Credentials..');

    const user = results[0];
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).send('Wrong Credentials..');

    const token = jwt.sign({ id: user.id, email: user.email }, jwt_Secret);
    res.send({ token });
  } catch (err) {
    res.status(500).send('Internal Server error..');
  }
};

// ---------------Track login details---------------------------------

const trackLogin = async (req, res) => {
  const { email, login_device } = req.body;

  try {
    await db.execute('INSERT INTO login_details (user_id, login_device, login_time) VALUES (?, ?, NOW())', [email, login_device]);
    res.send('Login tracked..');
  } catch (err) {
    res.status(500).send('Something went wrong..');
  }
};

export { login, trackLogin };
