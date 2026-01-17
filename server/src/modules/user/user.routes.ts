import { Router } from 'express';

import { loginUser } from './user.controller';

const userRoutes = Router();

userRoutes.get('/login', loginUser);

export default userRoutes;
