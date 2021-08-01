import bcrypt from 'bcrypt';
import express from 'express';
import Joi from 'joi';

import User from '../models/mongo/user';

const router = express.Router();

const userSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  username: Joi.string().alphanum().min(4).max(15)
    .optional(),
  password: Joi.string().required(),
});

router.post('/register', async (req, res) => {
  const result = userSchema.validate(req.body);
  if (result.error) {
    res.status(422).json({
      success: false,
      msg: `Validation err: ${result.error.details[0].message}`,
    });
    return;
  }

  const { username, email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    res.status(400).json({ success: false, msg: 'Email already exists' });
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const userToCreate = {
    username,
    email,
    password: hash,
  };

  const createdUser = await User.create(userToCreate);

  res.json({ success: true, id: createdUser.id, msg: 'The user was successfully registered' });
});

export default router;
