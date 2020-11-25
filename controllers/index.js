const {
  vendor: /*as*/ Vendor,
  dish: Dish,
  tag: Tag
} = require('../models');

module.exports = class vendor_controller {
  static async get_vendors(req, res) {
    try {
      if (req.query.tags) {
        const filter_vendors = await Tag.findAll({
          where: {
            id: req.query.tags
          },
          include: [Vendor]
        });
        res.status(200).json(filter_vendors);
      } else {
        const vendors = await Vendor.findAll();
  
        res.status(200).json(vendors);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: `Internal Server Error: Couldn't get "vendors"; At function name: get_vendors`
      });
    }
  }

  static async put_vendor(req, res) {
    try {
      const result = await Vendor.create({
        name: req.body.name,
        logo: req.body.logo || null
      });

      res.status(201).json(result);
    } catch (error) {
      try {
        const reason = await error.errors[0].message;

        res.status(400).json({ "error": `Input Validation Error: ${reason}`, "__ignore_generated": error });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          "error": `Internal Server Error: Couldn't put in "vendors"; At function name: put_vendor`
        });
      }
    }
  }

  static async update_vendor(req, res) {
    try {
      const result = await Vendor.update({
        name: req.body.name,
        logo: req.body.logo || null
      }, {
        where: {
          id: req.params.id
        }
      });

      if (result[0]) {
        res.status(201).json({ msg: "success" });
      } else {
        res.status(404).json({ msg: `Vendor's ID of '${req.params.id}' was not found` })
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        "error": `Internal Server Error: Couldn't update '${req.params.id}'; At function name: update_vendor`
      });
    }
  }

  static async delete_vendor(req, res) {
    try {
      const result = await Vendor.destroy({
        where: {
          id: req.params.id
        }
      });

      console.log(result);
      if (result) {
        res.status(201).json({ msg: "success" });
      } else {
        res.status(404).json({ msg: `Vendor's ID of '${req.params.id}' was not found` })
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        "error": `Internal Server Error: Couldn't delete '${req.params.id}'; At function name: delete_vendor`
      });
    }
  }

  static async get_dishes(req, res) {
    try {
      const result = await Vendor.findOne({
        where: {
          id: req.params.id
        },
        include: [Dish]
      });

      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}