import  express from "express";
import controller from '../controller/womenscontroller.js'


 const router = express.Router();

 router.route('/')
    .get(controller.getAllWomens)
    .post(controller.addWomen)



    router.route('/:id')
    .get(controller.singleWomen)
    .delete(controller.delWomen)
    .patch(controller.editWomen)

export default router