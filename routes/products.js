import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router=express.Router();
let products=[];

router.get('/',(req,res)=>{
    console.log(products);
    res.send(products);
});

router.post('/',(req,res)=>{
    const product=req.body;
    const productWithId={...product,"id":uuidv4()};
    products.push(productWithId);
    res.send(`Product with name ${product.productName} has been added!` );

});

router.get('/:id',(req,res)=>{
    const {id}=req.params;
    const foundProduct=products.find((product)=>product.id==id);
    res.send(foundProduct);
});

router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    products=products.filter((product)=>product.id!=id);
    res.send(`product with id ${id} has been deleted`);

});

router.patch('/:id',(req,res)=>{
    const {id}=req.params;
    const product=products.find((product)=>product.id===id);
    const {productName,productPrice,isFav}=req.body;
    if(productName){product.productName=productName};
    if(productPrice){product.productPrice=productPrice};
    if(isFav){product.isFav=isFav};
    res.send(`product with id ${id} has been updated`);
})

export default router;