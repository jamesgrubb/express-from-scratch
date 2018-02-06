const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req , res) => {
    res.render('index', {
        title : 'Home'
    });
}

exports.addArticle = (req , res) => {
    res.render('editArticle' , {
        title : 'Add article'
    })
};

exports.createArticle = (req , res) => {
    console.log(req.body)
    res.json(req.body);
}

exports.createStore = async (req, res) => {
    const store = new Store(req.body);
    await store.save();
    res.redirect('/');
  };