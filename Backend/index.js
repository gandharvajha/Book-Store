import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
// import path from "path";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

// Allow requests from https://book-store-zbhe.vercel.app
const corsOptions = {
    origin: 'https://book-store-rb3c.onrender.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
app.use(cors(corsOptions));
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

//deployment 
// if(process.env.NODE_ENV==="production"){
//     const dirPath=path.resolve()
//     app.use(express.static("Frontend/dist"));
//     app.get("*",(req,res)=>{
//         res.sendFile(path.resolve(dirPath,"Frontend","dist","index.html"))
//     })
// }

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});