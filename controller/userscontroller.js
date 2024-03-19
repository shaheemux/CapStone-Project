import { getUsers, getUser, deleteUser, addUser, editUser } from '../models/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

export const registerUser = async (req, res) => {
    try {
       const { username, email, password } = req.body;
       const hashedPassword = await bcrypt.hash(password, 10);
   
       const [result] = await db.execute(
         'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
         [username, email, hashedPassword]
       );
   
       res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
       res.status(500).json({ error: 'Internal server error' });
    }
   }

   export const loginUser = async (req, res) => {
    try {
       const { Email_add, User_password } = req.body;
       const [user] = await db.execute('SELECT * FROM users WHERE Email_add = ?', [Email_add]);
   
       if (!user || !(await bcrypt.compare(User_password, user[0].User_password))) {
         return res.status(401).json({ error: 'Invalid credentials' });
       }
   
       const token = jwt.sign({ id: user[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
       res.json({ token });
    } catch (error) {
       res.status(500).json({ error: 'Internal server error' });
    }
   };


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




