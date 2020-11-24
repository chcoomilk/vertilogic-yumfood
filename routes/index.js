const router = require('express').Router();
const vendor_controller = require('../controllers');

router.get('/vendors', vendor_controller.get_vendors);
router.post('/vendors', vendor_controller.put_vendor);
router.patch('/vendors/:id', vendor_controller.update_vendor);
router.delete('/vendors/:id', vendor_controller.delete_vendor);

module.exports = router;