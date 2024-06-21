import User from "../model/user.model.js";
import contactus from "../model/contact.model.js";
import bcryptjs from "bcryptjs";

export const signup= async (req,res)=>{
    try{
        const{fullname,email,password}=req.body;
        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exits."})
           
        }
        const hashPassword=await bcryptjs.hash(password,10)
        const createdUSer=new User({
            fullname:fullname,
            email:email,
            password:hashPassword,
        })
        await createdUSer.save();
        res.status(201).json({message:"User created successfully",
            user:{
                _id:createdUSer._id,
                fullname:createdUSer.fullname,
                email:createdUSer.email
            }
        })

    }catch(error){
        console.log("Error:" +error.message);
        res.status(500).json({message:"Internal Server error"})
    }
}

export const login= async (req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email});
        const isMatch=await bcryptjs.compare(password,user.password)
        if(!user || !isMatch){
            return res.status(400).json({message:"Invaild username or password"});

        }else{
            return res.status(200).json({message:"Login Successful", User:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email

            }})
        }

    }catch(error){
        console.log("Error",error.message);
        // res.status(500).json({message:"Internal Server error."})
    }
}
// Contact us
export const contact=async (req,res)=>{
    try{
        const{ fullname,email,message}=req.body;
        const ContactUs=new contactus({
            fullname:fullname,
            email:email,
            message:message,
        })
        await ContactUs.save();
        res.status(200).json({message:"Thank you for contacting us"})
    }catch(error){
        console.log("Error",error.message);
    }
}