const express = require('express');
const UserData = require('./mongoDB/mongo');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.render('index');
    } catch (err) {
        res.status(404).render('error', { messsage: err.messsage })
    }
})

router.get('/get-data', async (req, res, next) => {
    try {
        const data = await UserData.find();
        const newObject = {
            articles: data.map(item => {
                return {
                    title: item.title,
                    content: item.content,
                    author: item.author,
                    _id: item._id
                }
            })
        }


        res.render('index', { items: newObject.articles });
    } catch (err) {
        res.status(404).render('error', { messsage: err.messsage })
    }

})

router.post('/insert', async (req, res, next) => {
    try {
        const item = {
            title: req.body.title,
            content: req.body.content,
            author: req.body.author
        }

        const data = new UserData(item);
        await data.save();

        res.redirect('/');
    } catch (err) {
        res.status(404).render('error', { messsage: err.messsage })
    }

})


router.post('/update', async (req, res, next) => {
    const id = req.body.id;
    try {
        const data = await UserData.findById(id);
        data.title = req.body.title;
        data.content = req.body.content;
        data.author = req.body.author;
        await data.save();
        res.redirect('/');
    } catch (err) {
        res.status(404).render('error', { messsage: err.messsage })
    }

});


router.post('/delete', async (req, res, next) => {
    try {
        const id = req.body.id;
        const data = await UserData.findById(id);
        await UserData.findByIdAndRemove(id);
        res.redirect('/');
    }
    catch (err) {
        res.status(404);
        res.render('error', { messsage: err.messsage })
    }

})

module.exports = router