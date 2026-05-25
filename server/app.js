import express from "express";
import cors from "cors"

const app = express();

app.use(cors());
app.use(express.json())


app.post("/hello" ,(req,res)=>{
    const {name} = req.body;

    res.json({
        message: `hello my name is ${name}`
    })

})

export default app