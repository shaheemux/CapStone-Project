import { pool } from '../config/config.js';

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

const addUser=async(UserId,First_name,Last_name,User_age,Gender,User_role,Email_add,User_password,User_Profile)=>{
    await pool.query(`
    INSERT INTO Users (UserId,First_name,Last_name,User_age,Gender,User_role,Email_add,User_password,User_profile) values(?,?,?,?,?,?,?,?,?)`,
    [UserId,First_name,Last_name,User_age,Gender,User_role,Email_add,User_password,User_Profile])
}

const editUser = async (First_name, Last_name, User_age, Gender, User_role, Email_add, User_password, User_profile, UserId) => {
    await pool.query(`
        UPDATE Users SET First_name=?, Last_name=?, User_age=?, Gender=?, User_role=?, Email_add=?, User_password=?, User_profile=?
        WHERE UserId=?
    `, [First_name, Last_name, User_age, Gender, User_role, Email_add, User_password, User_profile, UserId]);
}

const checkPassword = async (mail_add,User_password) => {
       const [rows] = await pool.query(`SELECT * FROM Users WHERE Email_add = ?`, [mail_add]);

    if (rows.length > 0) {
        return rows[0].User_password;
    } else {
        return null;
    }
}



async function getWomens() {
    const [Women] = await pool.query(`
    SELECT * FROM 
    Womens 
    `)
    return Women
}
async function getWomen(id) {
    const [Women] = await pool.query(`
    SELECT * FROM Womens WHERE id = ?
    `, [id])
    return Women
}

async function deleteWomen(id){
    const [Women] = await pool.query(`
    DELETE FROM Womens
     WHERE id = ?
    `, [id])
}

const editWomens=async(prod_name,price,prod_url,id)=>{
    await pool.query(`
    UPDATE Womens SET prod_name=?, price=?,prod_url=? 
    WHERE id=? `,
     [prod_name,price,prod_url,id])
     return getWomens()
}


const addWomens=async(prod_name,price,prod_url)=>{
    await pool.query(`
    INSERT INTO Womens (prod_name,price,prod_url) values(?,?,?) `,
    [prod_name,price,prod_url])
} 




export  {getProducts, getProduct, deleteProduct, editProduct, addProduct, getUsers, getUser, deleteUser,addUser, editUser, checkPassword , getWomens, getWomen, deleteWomen, editWomens, addWomens}