

const Order = require("../models/Order");
const createError = require("http-errors")

exports.getOrders = async (req, res, next) => {

  try {
    const orders = await Order.find();
    res.status(200).send(orders);
  } catch (error) {
    next(error)
  }
};

exports.addOrder = async (req, res, next) => {

  try {
    const order = new Order(req.body);
    await order.save();
    res.status(200).send(order)
  } catch (error) {
    next(error)
  }

};

exports.getOrder = async(req, res, next) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);
    if (!order) throw new createError.NotFound();
    res.status(200).send(order);

  } catch (error) {
    next(error)
  }
};

exports.deleteOrder = async(req, res, next) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    res.status(200).send(order)
  } catch (error) {
    next(error)
  }

};

exports.updateOrder = async (req, res, next) => {

  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!order) throw new createError.NotFound();
    res.status(200).send(order);

  } catch (error) {
    next(error)
  }
};
