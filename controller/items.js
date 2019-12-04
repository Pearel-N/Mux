const Item = require("../model/items");

const addItem = async (req, res) => {
  let item = await new Item({
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    rating: req.body.rating,
    price: req.body.price,
    discount: req.body.discount,
    seller: req.body.seller,
    manufacturer: req.body.manufacturer
  });

  await item
    .save()
    .then(item => {
      return res.status(200).json({
        data: {
          id: item.id
        }
      });
    })
    .catch(err => {
      return res.json({
        status: 400,
        message: "error while inserting new item"
      });
    });
};

const getItems = async (req, res) => {
  let items = await Item.find({}, items => {
    return res
      .status(200)
      .json({
        data: {
          items
        }
      })
      .catch(err => {
        return res.json({
          status: 400,
          message: "Error while fetching items"
        });
      });
  });
};

module.exports = {
  addItem,
  getItems
};