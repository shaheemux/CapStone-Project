import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { checkPassword } from '../models/db.js';


const auth =async(req,res,next)=>{
  
    const {User_password,Email_add}= req.body
    const hashedPassword=await checkPassword(Email_add)
    bcrypt.compare(User_password,hashedPassword,(err,result)=>{
        if (err) throw err
        if(result===true){
            const {Email_add} = req.body
            const token = jwt.sign({Email_add:Email_add},

            process.env.SECRET_KEY,{expiresIn:'1h'}) 
            res.send({

                token:token,
                msg:"you have logged in"
            })
           next()
        }else{
            res.send({msg:'The username or password is incorrect'})
        }
    })
}

export {auth}