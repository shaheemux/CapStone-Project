import  express from "express"
import controller from '../controller/userscontroller.js'

const router = express.Router();

router.route('/')
.get(controller.getAllUsers)
.post(controller.addUser)



router.route('/:id')
.get(controller.singleUser)
.delete(controller.deleteUser)
.patch(controller.editUser)

export default router