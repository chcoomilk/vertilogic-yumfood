const router = require('express').Router();
const vendor_controller = require('../controllers');
const order_controller = require('../controllers/order');

router.get('/vendors', vendor_controller.get_vendors);
router.post('/vendors', vendor_controller.put_vendor);
router.patch('/vendors/:id', vendor_controller.update_vendor);
router.delete('/vendors/:id', vendor_controller.delete_vendor);
router.get('/vendors/:id/dishes', vendor_controller.get_dishes);
router.get('/order', order_controller.get_order);
router.post('/order', order_controller.put_order);

module.exports = router;