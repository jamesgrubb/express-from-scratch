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