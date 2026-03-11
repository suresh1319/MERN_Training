import userModel from "../models/userModel.js";

const displayUsers = async(req,res)=>{
    try{
        const users = await userModel.find({})
        res.render('users/index',{users});
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

const addUserForm = (req,res)=>{
    res.render('users/add')
}

const addUser = async(req, res)=>{
    try{
        const user = req.body;
        await userModel.create(user);
        res.redirect('/users');
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

const deleteUser = async(req, res)=>{
    try{
        const id = req.params.id;
        await userModel.findByIdAndDelete(id);
        res.redirect('/users');
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

const editUserForm = async(req,res)=>{
    const id = req.params.id;
    const user = await userModel.findOne({_id:id});
    res.render('users/edit',{user});
}

const saveUser = async(req,res)=>{
    const id = req.params.id;
    const updatedUser = req.body;
    await userModel.findByIdAndUpdate(id,updatedUser);
    res.redirect('/users');
};

export {displayUsers,addUserForm,addUser,deleteUser,editUserForm,saveUser}