var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/products', function(req, res, next) {
  res.status(202).render('products', { title: 'Products' });
});

router.get('/checkout', function(req, res, next) {
  res.render('checkout', { title: 'Checkout' });
});

router.post('/charge', function(req, res,next) {
    var stripeToken = req.body.stripeToken;
    var amount =  req.body.stripeAmount;

    stripe.charges.create({
        card: stripeToken,
        currency: 'usd',
        amount: amount
    },
    function(err, charge) {
        if (err) {
            res.send('error');
        } else {
            res.send('success');
        }
    });
});

module.exports = router;
