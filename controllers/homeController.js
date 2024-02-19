import userModel from "../models/userModel.js";

export const homeController = async(req, res)=>{
    try{
         console.log(req.body);
        res.render('index');
    }catch(error){
        console.log(error.message);

    }
    
}

//user contact controller

export const contactController = async(req, res)=>{
    try{  
     const {name , email , subject , message} = req.body;
    
    console.log("***",name);
    if(!name || !email || !subject || !message){
        res.status(400).send({success: false , message: "Please Provide  all the required fields"})
    }else{
        const data = await userModel.create(req.body);
        res.status(200).send({success: true, message: "Form Successfully submited" , data});
    }
    
    }catch(err){
        console.log(err.message);
        res.status(500).send({success: false , message: err.message});
    }
}