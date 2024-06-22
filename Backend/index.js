import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.mongoDBURI;

// Connect to MongoDB
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(error => console.log("Error connecting to MongoDB:", error));

// Other server setup and routes

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
