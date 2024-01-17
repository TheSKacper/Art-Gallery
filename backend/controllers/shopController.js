const { Shop } = require("../models/shopModel.js");

const createProduct = async (req, res) => {
  const newProduct = new Shop({
    title: req.body.title,
    price: req.body.price,
    year: req.body.year,
    img: req.body.img,
    desc: req.body.desc,
    owner: req.body.owner,
  });
  try {
    const createProduct = await newProduct.save();
    res.status(200).json(createProduct);
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Shop.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted");
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const find = await Shop.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(find);
  } catch (error) {
    console.log(error);
  }
};

const findAllProduct = async (req, res) => {
  try {
    const find = await Shop.find();
    res.status(200).json(find);
  } catch (error) {
    console.log(error);
  }
};

const findById = async (req, res) => {
  try {
    const find = await Shop.findById(req.params.id);
    res.status(200).json(find);
  } catch (error) {
    console.log(error);
  }
};

const searchTitle = async (req, res) => {
  try {
    const search = new RegExp(req.params.searchTerm, "i");
    const find = await Shop.find({ title: { $regex: search } });
    res.status(200).json(find);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  findById,
  findAllProduct,
  searchTitle,
};
