import { getUsers, getUser, deleteUser, addUser, editUser } from '../models/db.js';

export default {
    getAllUsers : async (req, res)=>{
        res.send(await getUsers(req.body.First_name))
    },

    singleUser : async (req, res)=>{
        res.send(await getUser(+req.params.id))
    },

    deleteUser: async (req, res)=>{
        await deleteUser(+req.params.id)
        res.send(await getUsers())
    },

    addUser:async(req,res)=>{
        const {UserId,First_name,Last_name,User_age,Gender,User_role,Email_add,User_password,User_profile} = req.body;
        const post = await addUser(UserId,First_name,Last_name,User_age,Gender,User_role,Email_add,User_password,User_profile);
        res.send(await getUsers());  
    },


    editUser: async (req, res) => {
      try {
          const [user] = await getUser(+req.params.id);
  

          const {
              First_name = user.First_name,
              Last_name = user.Last_name,
              User_age = user.User_age,
              Gender = user.Gender,
              User_role = user.User_role,
              Email_add = user.Email_add,
              User_password = user.User_password,
              User_profile = user.User_profile,
          } = req.body;
  
          await editUser(First_name, Last_name, User_age, Gender, User_role, Email_add, User_password, User_profile, +req.params.id);
  
          const users = await getUsers();
          res.send(users);
      } catch (error) {
          console.error(error);
          res.status(500).send('An error occurred while updating the user.');
      }
  },
  login:async(req, res)=>{
    
  }

}




