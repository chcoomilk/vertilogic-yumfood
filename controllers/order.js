const { order: Order, dish: Dish } = require('../models');

module.exports = class order_controller {
  static async get_order(_, res) {
    try {
      const orders = await Order.findAll();

      res.status(200).json(orders);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async put_order(req, res) {
    try {
      const dish_exist = await Dish.findOne({
        where: {
          id: req.body.dish_id
        }
      });

      if (dish_exist) {
        const result = await Order.create({
          dish_id: req.body.dish_id,
          special_request: req.body.special_request,
          quantity: +req.body.quantity
        });
  
        res.status(201).json(result);
      } else {
        res.status(404).json({ msg: `Order's ID of '${req.body.dish_id}' was not found` })
      }
    } catch (error) {
      console.log(error)
      try {
        const reason = await error.errors[0].message;

        res.status(400).json({ "error": `Input Validation Error: ${reason}`, "__ignore_generated": error });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          "error": `Internal Server Error: Couldn't put in "orders"; At function name: put_order`
        });
      }
    }
  }
}