const express =require('express');
const cors =require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app=express();

const port=process.env.PORT || 5000;
//nahid
//EB9Y1Dw0oji6tfOa

app.use(cors());
app.use(express.json());




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xqul9uc.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run(){
    try{
        const productCollection=client.db('emaJohn').collection('products')

        app.get('/products',async(req,res)=>{
            const query={}
            const cursor =productCollection.find(query);
            const products =await cursor.toArray();
            res.send(products);
        })
    }
    finally{

    }
}
run().catch(err=>console.log(err));




app.get('/',(req,res)=>{
    res.send('ema john server is running');
})

app.listen(port ,()=>{
    console.log(`ema john running on:${port}`);
})