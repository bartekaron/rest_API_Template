const userService = require('../services/user.service');

exports.register = async (req, res, next) => {
    try{
        const { name, email, password, phone, address } = req.body;
        if ( !name || !email || !password){
            return res.status(400).json({ message: 'Hiányzó adatok!'});
        }
        const user = await userService.registerUser(name, email, password, phone, address);
        res.status(201).json(user);
    }catch(error){
        next(error);
    }
}

exports.login = async (req, res, next) => {
    try{
        const { email, password } = req.body;
        if (!email || !password){
            return res.status(400).json({ message: 'Hiányzó adatok!'});
        }
        const user = await userService.loginUser(email, password);
        res.status(200).json(user);
    }catch(error){
        next(error);
    }
}

exports.getAllUsers = async (req, res, next) => {
    try{
        const users = await userService.getAllUsers();
        res.status(200).json({success:true, results: users});
    }catch(error){
        next(error);
    }
}

exports.getUserById = async (req, res, next) => {
    try{
        const id = req.params.id;
        const user = await userService.getUserById(id);
        res.status(200).json({success:true, results: user});
    }catch(error){
        next(error);
    }
}

exports.updateUser = async (req, res, next) => {
    try{
        const id = req.params.id;
        const { name, email, phone, address } = req.body;
        if (!name || !email){
            return res.status(400).json({ message: 'Hiányzó adatok!'});
        }
        const user = await userService.updateUser(id, name, email, phone, address);
        res.status(200).json(user);
    }catch(error){
        next(error);
    }
}

exports.deleteUser = async (req, res, next) => {
    try{
        const id = req.params.id;
        const user = await userService.deleteUser(id);
        res.status(200).json(user);
    }catch(error){
        next(error);
    }
}

exports.getProfile = async (req, res, next) => {
    try{
        const id = req.user.id;
        const user = await userService.getProfile(id);
        res.status(200).json({success:true, results: user});
    }catch(error){
        next(error);
    }
}