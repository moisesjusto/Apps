const Userss = {};


// modelo
const User= require('../model/ModelNewUser');

//getUser
Userss.GetUser= async (req,res)=>{
    const {email,password}= req.body;
    const Res = await User.findOne({email,password})
    res.json(Res);
};

//getUserId
Userss.GetUserID= async (req,res)=>{
    const {_id}= req.body;
    const Res = await User.findOne({_id})
    res.json(Res);
};

//postUser
Userss.PostUser= async (req,res)=>{
    const {email,password,name,lastname,provincia,sector,calle,tel}= req.body;
    const user = new User({email,password,name,lastname,provincia,sector,calle,tel});
    console.log(user);
    await user.save();
    res.json(user);
};

//PutUser
Userss.PutUser= async (req,res)=>{
    const {email,password,name,lastname,provincia,sector,calle,tel,_id}=req.body;
    const OK = await User.findOneAndUpdate(_id,{email,password,name,lastname,provincia,sector,calle,tel});
    await OK.save();
    res.send('ok');
};

//DeleteUser
Userss.DeleteUser= async(req,res)=>{
    const IID = req.params.id;
    await User.findByIdAndRemove(IID);
    res.send('removido');
};

Userss.Polo= async (req,res)=>{
    const Res = await User.find({name:'Polo'})
    res.json(Res);
};
Userss.Blusas= async (req,res)=>{
    const Res = await User.find({name:'blusa'})
    res.json(Res);
};
Userss.Jeans= async (req,res)=>{
    const Res = await User.find({name:'jeans'})
    res.json(Res);
};
Userss.Playa= async (req,res)=>{
    const Res = await User.find({name:'playa'})
    res.json(Res);
};
Userss.Vermuda= async (req,res)=>{
    const Res = await User.find({name:'vermuda'})
    res.json(Res);
};
Userss.Capris= async (req,res)=>{
    const Res = await User.find({name:'capri'})
    res.json(Res);
};
Userss.Pijamas= async (req,res)=>{
    const Res = await User.find({name:'pijama'})
    res.json(Res);
};
Userss.Vestidos= async (req,res)=>{
    const Res = await User.find({name:'vestido'})
    res.json(Res);
};


module.exports = Userss;