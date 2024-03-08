import  express from "express";
import controller from '../controller/productscontroller.js'
// import { getMessage, postMessage , deleteMessage, updateMessage, addMessage} from "../controller/productscontroller.js";

 const router = express.Router();

 router.route('/')
    .get(controller.getAllProducts)
    .post(controller.addProduct)



    router.route('/:id')
    .get(controller.singleProduct)
    .delete(controller.delProduct)
    .patch(controller.editProd)

export default router