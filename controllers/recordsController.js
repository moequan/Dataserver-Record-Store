const Record = require("../models/Record");
const createError = require("http-errors")

exports.getRecords = async (req, res, next) => {
  try {
    const records = await Record.find();
    res.status(200).send(records);
  } catch (error) {
    next(error)
  }
  };



exports.addRecord = async (req, res, next) => {
  // const record = req.body;
  try {
    const record = new Record(req.body);
    await record.save();
    res.status(200).send(record)
  } catch (error) {
    next(error)

  }
};

exports.getRecord = async (req, res, next) => {

  try {
    const { id } = req.params;
    const record = await Records.findById(id);
    if (!record) throw new createError.NotFound();
    res.status(200).send(record);

  } catch (error) {
    next(error)

  }
}

exports.deleteRecord = async (req, res, next) => {
  try {
    const record = await Record.findByIdAndDelete(req.params.id);
    res.status(200).send(record)
  } catch (error) {
    next(error)
  }

};

exports.updateRecord = async (req, res, next) => {
  try {
    const record = await Record.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!record) throw new createError.NotFound();
    res.status(200).send(record);

  } catch (error) {
    next(error)
  }

};
