import  app from "./app.js";
import dotenv from "dotenv"

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT,(req,res)=>{
    console.log(`Server is running at ${PORT}`)
})

