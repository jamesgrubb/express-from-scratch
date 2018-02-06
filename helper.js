const fs = require('fs');

exports.icon = (name) => fs.readFileSync(`./public/images/icons/${name}.svg`)

exports.sitename = `Piano Course`;

exports.siteNav = [{
    slug: '/home' , title: 'Home'  , icon : 'home'  
},
{
    slug: '/articles' , title: 'Articles' , icon : 'article'
}]
