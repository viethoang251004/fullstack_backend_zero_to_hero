const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello world with nodemon!')
});

router.get('/hoang', (req, res) => {
    res.send('Hello everybody!')
});

router.get('/hocnodejscoban', (req, res) => {
    // res.send('<h1>Học code cơ bản với Hoàng</h1>')
    res.render('sample.ejs')
});

module.exports = router; // export default