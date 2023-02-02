import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/products.js';


const app=express();
const PORT=5000;


app.get('/',(req,res)=>{
   // console.log(products);
   res.send("heyy");
   //res.send(products);
})



app.use(bodyParser.json());
app.use('/products',productRoutes);
app.listen(PORT,()=>
    console.log(`server is running on port: http://localhost:${PORT} `)
);