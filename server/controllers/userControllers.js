import bcrypt from "bcrypt";
import { db } from "../db/db.js";

//------------------------Admin create user-------------------------------

const createUser = async (req, res) => {
  const { email, password } = req.body;
  
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    await db.execute("INSERT INTO user_details (email, password) VALUES (?, ?)", [
      email,
      hashedPassword,
    ]);
    res.send("User has been created..");
  } catch (err) {
    res.status(500).send("Internal Server error..");
  }
};

//-------------------Admin view login details---------------------------------

const getLoginDetails = async (req, res) => {
  try {
    const [results] = await db.execute("SELECT * FROM login_details");
    res.send(results);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

export { createUser, getLoginDetails };
