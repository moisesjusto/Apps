const Notas = {};


// modelo
const Notes= require('../model/ModelNotes');

Notas.GetNotes= async (req,res)=>{
    const Res = await Notes.find()
    res.json(Res);
};
Notas.PostNotes= async (req,res)=>{
    const {name,precio,dueño,url,categoria,descripsion}= req.body;
    const notas = new Notes({name,precio,dueño,url,categoria,descripsion});
    await notas.save();
    res.send('ok');
};
Notas.PutNotes= async (req,res)=>{
    const {name,precio,dueño,url,categoria,descripsion}=req.body;
    const IID = req.params.id;
    await User.findOneAndUpdate(IID,{name,precio,dueño,url,categoria,descripsion});
    res.send(console.log('ok'));
};
Notas.DeleteNotes= async(req,res)=>{
    const IID = req.params.id;
    await Notes.findByIdAndRemove(IID);
    res.send('removido');
};

module.exports = Notas;