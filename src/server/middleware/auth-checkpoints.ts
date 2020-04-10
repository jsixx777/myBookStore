import * as React from 'react';
import * as passport from 'passport';
import { RequestHandler, Request } from 'express';
import { UsersTable } from '../db/tables';

export const tokenCheckpoint: RequestHandler = (req, res, next) => {
	return passport.authenticate('bearer', { session: false }, (err, user, info) => {
		if (user) req.user = user;
		return next();
	})(req, res, next);
};