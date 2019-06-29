import { Router } from 'express';
import multer from 'multer';
import UserController from './app/controllers/UsersController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

import multerConfig from './config/multer';
import FileController from './app/controllers/FileController';

import ProviderController from './app/controllers/ProviderController';
// import Appointment from './app/models/Appointment';
import AppointmentController from './app/controllers/AppointmentController';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/providers', ProviderController.index);

routes.post('/files', upload.single('file'), FileController.store);

routes.post('/appointments', AppointmentController.store);
routes.get('/appointments', AppointmentController.index);

export default routes;
