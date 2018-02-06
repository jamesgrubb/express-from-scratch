let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

let articleSchema = new mongoose.Schema({
    title : {
        type : String,
        required : 'Plesae enter the Authers name',
        trim : true,
    },
    auther:{
        type: String,
        required: true,
        trim : true,
    },
    body:{
        type: String,
        required: true,
    },
    tags : [String],
});

articleSchema.pre('save' , function(next){
    if(!this.isModified('title')){
        next();
        return;
    }
    this.slug = slug(this.title);
    next();
})

module.exports = mongoose.model('Article' , articleSchema);