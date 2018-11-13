var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    var data = [
        {
            title: 'اطلاعات پایه',
            questions: [
                {title: 'نام'},
                {title: 'فامیل'},
                {title: 'تلفن'},
                {title: 'آدرس'},
            ]
        },
        {
            title: 'اطلاعات پرسنلی',
            questions: [
                {title: 'کد'},
                {title: 'پست'},
                {title: 'سمت'}
            ]
        }

    ]

    res.render('term/index', {menu: data});
});

module.exports = router;
