import { getProducts, getProduct, deleteProduct, addProduct, editProduct} from '../models/db.js';

export default {
    getAllProducts : async (req, res)=>{
        res.send(await getProducts())
    },

    singleProduct : async (req, res)=>{
        res.send(await getProduct(+req.params.id))
    },

    delProduct : async (req, res)=>{
        await deleteProduct(+req.params.id)
        res.send(await getProducts())
    },
    addProduct:async(req,res)=>{
        const { prod_name,price, prod_url} = req.body;
        const post = await addProduct(prod_name,price, prod_url);
        res.send(await getProducts());  
    },
 
    
    editProd:async(req,res)=>{
        const [products]=await getProduct(+req.params.id)
 
        let {prod_name,price,prod_url}=req.body
 
        prod_name ? prod_name=prod_name: {prod_name}=products
        price ? price=price: {price}=products
        prod_url ? prod_url=prod_url: {prod_url}=products
 
        await editProduct(prod_name,price,prod_url,+req.params.id)
 
        res.json(await getProducts())
 
     }  

    
}