const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ryanasdf025:mpyyiix49N42fjoQ@cluster0.pqjozlg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").
then(() =>{
    console.log('mongodb connection established')
})
.catch(err => console.error(err));

const newSchema = new mongoose.Schema({
    Full_Name:{
        type: String
    },
    Email:{
        type: String
    },
    Subject:{
        type: String
    },
    Description:{
        type: String
    },
});

const collection = new mongoose.model("collection", newSchema);

module.exports = collection;