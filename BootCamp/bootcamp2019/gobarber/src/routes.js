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
import SchedureController from './app/controllers/ScheduleController';

import NotificationController from './app/controllers/NotificationController';

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

routes.get('/schedules', SchedureController.index);

routes.get('/notifications', NotificationController.index);

routes.put('/notifications/:id', NotificationController.update);

export default routes;
