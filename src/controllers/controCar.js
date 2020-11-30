const Card = {};


// modelo
const card= require('../model/modelCar');

Card.GetCar= async (req,res)=>{
    const IID = req.params.id;
    const Res = await card.findById(IID)
    res.json(Res);
};
Card.PostCar= async (req,res)=>{
    const {name,precio,dueño,url,categoria,descripsion}= req.body;
    const carr = new card({name,precio,dueño,url,categoria,descripsion});
    await carr.save();
    res.send('ok');
};
Card.PutCar= async (req,res)=>{
    const {name,precio,dueño,url,categoria,descripsion}=req.body;
    const IID = req.params.id;
    await card.findOneAndUpdate(IID,{name,precio,dueño,url,categoria,descripsion});
    res.send(console.log('ok'));
};
Card.DeleteCar= async(req,res)=>{
    const IID = req.params.id;
    await card.findByIdAndRemove(IID);
    res.send('removido');
};

module.exports = Card;