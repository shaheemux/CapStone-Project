import express from 'express';
import controller from '../controller/userscontroller.js';


   const router = express.Router()

   router
      .route('/')
         .post(controller.login)


export default router         