const model = require('../models/index')

module.exports = {
    getAll
}

function getAll(req, res) {
    res.render('index', {
        user: model.getUserName(),
        post: model.getBlogPost()
    });
};