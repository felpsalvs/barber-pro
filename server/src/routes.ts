import { Router, Request, Response } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';

const router = Router();

//router.get('/teste', (req: Request, res: Response) => {
  //eturn res.json({ message: 'Hello World' });
//});
// ROUTES USERS
router.post('/users', new CreateUserController().handle)
export { router };