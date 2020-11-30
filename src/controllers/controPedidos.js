const PD = {};


// modelo
const pd= require('../model/modelpedidos');

PD.Get= async (req,res)=>{
    const Res = await pd.find()
    res.json(Res);
};
PD.Post= async (req,res)=>{
    const {id,consumo,cantidad,descripsion,tipoDpag,direcion,comprador,tel}= req.body;
    const carr = new pd({id,consumo,cantidad,descripsion,tipoDpag,direcion,comprador,tel});
    await carr.save();
    res.send('ok');
};


PD.Put= async (req,res)=>{
    const {id,consumo,cantidad,descripsion,tipoDpag,direcion,comprador,tel}=req.body;
    const IID = req.params.id;
    await pd.findOneAndUpdate(IID,{id,consumo,cantidad,descripsion,tipoDpag,direcion,comprador,tel});
    res.send(console.log('ok'));
};
PD.Delete= async(req,res)=>{
    const IID = req.params.id;
    await pd.findByIdAndRemove(IID);
    res.send('removido');
};

module.exports = PD;