import 'dotenv/config';

import compression from 'compression';
import cors from 'cors';

import express from 'express';
// import passport from 'passport';
// import initPassport from '../config/passport';

import homeRoutes from '../routes/home';
import userRoutes from '../routes/users';
import { connect } from '../db/mongoose';
// import { connect } from '../db/sqlite';

// Instantiate express
const server = express();
server.use(compression());

// Passport Config
// initPassport(passport);
// server.use(passport.initialize());

connect();

server.use(cors());
server.use(express.json());

server.use('/api', homeRoutes);
server.use('/api/users', userRoutes);

export default server;
