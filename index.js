import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';
import router from './routes/users.js';

const app=express();
const PORT=5000;


app.get('/',(req,res)=>{
    console.log("TEST");
    res.send(users);
})



app.use(bodyParser.json());
app.use('/users',userRoutes);
app.listen(PORT,()=>
    console.log(`server is running on port: http://localhost:${PORT} `)
);