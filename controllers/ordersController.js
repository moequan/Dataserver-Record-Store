

const Order = require("../models/Order");
const createError = require("http-errors")

exports.getOrders = async (req, res, next) => {

  try {
    const orders = await Order.find();
    res.status(200).send(orders);
  } catch (error) {
    next(error)
  }
  // const orders = db.get('orders').value();
  // res.status(200).send(orders);
};

exports.addOrder = async (req, res, next) => {

  try {
    const order = new Order(req.body);
    await order.save();
    res.status(200).send(order)
  } catch (error) {
    next(error)
  }
  // const order = req.body;
  // db.get('orders')
  //   .push(order)
  //   .last()
  //   .assign({ id: Date.now().toString() })
  //   .write();

  // res.status(200).send(order);
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
  // const { id } = req.params;
  // const order = db
  //   .get('orders')
  //   .find({ id })
  //   .value();

  // res.status(200).send(order);
};

exports.deleteOrder = async(req, res, next) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    res.status(200).send(order)
  } catch (error) {
    next(error)
  }
  // const { id } = req.params;
  // const order = db
  //   .get('orders')
  //   .remove({ id })
  //   .write();

  // res.status(200).send(order);
};

exports.updateOrder = async (req, res, next) => {

  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!order) throw new createError.NotFound();
    res.status(200).send(order);
    
  } catch (error) {
    next(error)
  }
  // const { id } = req.params;
  // const data = req.body;

  // const order = db
  //   .get('orders')
  //   .find({ id })
  //   .assign(data)
  //   .write();

  // res.status(200).send(order);
};
