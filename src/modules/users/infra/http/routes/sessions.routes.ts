import { Router } from 'express';

import SessionsController from '@modules/users/infra/controllers/SessionsController';

const sessionssRouter = Router();
const sessionsController = new SessionsController();

sessionssRouter.post('/', sessionsController.create);

export default sessionssRouter;
