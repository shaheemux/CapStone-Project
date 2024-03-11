import { getUsers, getUser, deleteUser, addUser, editUser } from '../models/db.js';
import bcrypt from 'bcryptjs';

export async function signupUser(req, res) {
  const { email, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await addUser({ email, password: hashedPassword });

    res.status(201).send({ user });
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while signing up.' });
  }
}

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
        const {UserId,First_name,Last_name,User_age,Gender,User_role,Email_add,User_password} = req.body;
        const post = await addUser(UserId,First_name,Last_name,User_age,Gender,User_role,Email_add,User_password);
        res.send(await getUsers());  
    },

    editUser:async(req,res)=>{
        let {First_name,Last_name,User_age,Gender,User_role,Email_add, User_password}=req.body

        const [user]=await getUser(+req.params.id)
 
 
        First_name ? First_name=First_name: {First_name}=user
        Last_name ? Last_name=Last_name: {Last_name}=user
        User_age ? User_age=User_age: {User_age}=user
        Gender ?  Gender= Gender: { Gender}=user
        User_role ? User_role=User_role: {User_role}=user
        Email_add ? Email_add=Email_add: {Email_add}=user
        User_password ? User_password=User_password: {User_password}=user
 
        await editUser(First_name,Last_name,User_age,Gender,User_role,Email_add, User_pass,User_Profile,+req.params.id)
 
        res.send(await getUsers())
 
     }

}




