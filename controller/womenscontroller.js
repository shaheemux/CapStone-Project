import { getWomens, getWomen, deleteWomen, editWomens, addWomens} from '../models/db.js';

export default {
    getAllWomens : async (req, res)=>{
        res.send(await getWomens())
    },

    singleWomen : async (req, res)=>{
        res.send(await getWomen(+req.params.id))
    },

    delWomen : async (req, res)=>{
        await deleteWomen(+req.params.id)
        res.send(await getWomen())
    },
    addWomen:async(req,res)=>{
        const { prod_name,price, prod_url} = req.body;
        const post = await addWomens(prod_name,price, prod_url);
        res.send(await getWomen());  
    },
 
    
    editWomen:async(req,res)=>{
        const [womens]=await getWomens(+req.params.id)
 
        let {prod_name,price,prod_url}=req.body
 
        prod_name ? prod_name=prod_name: {prod_name}=womens
        price ? price=price: {price}=womens
        prod_url ? prod_url=prod_url: {prod_url}=womens
 
        await editWomens(prod_name,price,prod_url,+req.params.id)
 
        res.json(await getWomens())
 
     }  

    
}