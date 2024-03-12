import { pool } from '../config/config.js'


async function getProducts() {
    const [Product] = await pool.query(`
    SELECT * FROM 
    Products 
    `)
    return Product
}
async function getProduct(id) {
    const [Product] = await pool.query(`
    SELECT * FROM Products WHERE id = ?
    `, [id])
    return Product
}

async function deleteProduct(id){
    const [Product] = await pool.query(`
    DELETE FROM Products
     WHERE id = ?
    `, [id])
}

const editProduct=async(prod_name,price,prod_url,id)=>{
    await pool.query(`
    UPDATE Products SET prod_name=?, price=?,prod_url=? 
    WHERE id=? `,
     [prod_name,price,prod_url,id])
     return getProducts()
}


const addProduct=async(prod_name,price,prod_url)=>{
    await pool.query(`
    INSERT INTO Products (prod_name,price,prod_url) values(?,?,?) `,
    [prod_name,price,prod_url])
} 



// adding a user

async function getUsers() {
    const [User] = await pool.query(`SELECT * FROM Users`)
    return User
}
async function getUser(UserId) {
    const [User] = await pool.query(`
    SELECT * FROM Users WHERE UserId = ?
    `, [UserId])
    return User
}

async function deleteUser(UserId){
    const [user] = await pool.query(`
    DELETE FROM Users WHERE UserId = ?
    `, [UserId])
}

const editUser =async(First_name,Last_name,User_age,Gender,User_role,Email_add,User_password,User_profile)=>{
    await pool.query(` 
    UPDATE Users SET First_name=?, Last_name=?, User_age=?, Gender=?, User_role=?, Email_add=?,User_profile, User_password=?
    WHERE UserId=? `,
     [First_name,Last_name,User_age,Gender,User_role,Email_add, User_password,User_profile])
     return getProducts()
}


const addUser=async(UserId,First_name,Last_name,User_age,Gender,User_role,Email_add,User_password,User_Profile)=>{
    await pool.query(`
    INSERT INTO Users (UserId,First_name,Last_name,User_age,Gender,User_role,Email_add,User_password,User_profile) values(?,?,?,?,?,?,?,?,?) `,
    [UserId,First_name,Last_name,User_age,Gender,User_role,Email_add,User_password,User_Profile])
}





export  {getProducts, getProduct, deleteProduct, editProduct, addProduct, getUsers, getUser, deleteUser, editUser, addUser}