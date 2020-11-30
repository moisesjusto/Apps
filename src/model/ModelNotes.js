const {Schema,model}= require('mongoose');


const Notes = new Schema({
    name: {type:String, required:true},
    precio: {type:String, required:true},
    url: {type:String, required:true},
    descripsio: {type:String, required:true},
    dueño: {type:String, required:true},
    categoria: {type:String, required:true},
},{
    timestamps:true
});

module.exports = model('Notes',Notes);