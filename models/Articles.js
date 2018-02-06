let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

let articleSchema = mongoose.Schema({
    title : {
        type : String,
        required : 'Plesae enter the Authors name',
        trim : true
    },
    auther:{
        type: String,
        required: true,
        trim : true,
    },
    body:{
        type: String,
        required: true
    },
    tags : [String]
});

articleSchema.pre('save' , function(next){
    if(!this.isModified('name')){
        next();
        return;
    }
    this.slug = slug(this.name);
    next();
})

module.exports = mongoose.model('Article' , articleSchema);