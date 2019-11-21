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


//   const records = db.get('records').value();
//   res.status(200).send(records);
// };

exports.addRecord = async (req, res, next) => {
  // const record = req.body;
  try {
    const record = new Record(req.body);
    await record.save();
    res.status(200).send(record)
  } catch (error) {
    next(error)
    // db.get('records')
    //   .push(record)
    //   .last()
    //   .assign({ id: Date.now().toString() })
    //   .write();
    // res.status(200).send(record);
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
    // const { id } = req.params;
    // const record = db
    //   .get('records')
    //   .find({ id })
    //   .value();

    // res.status(200).send(record);
  }
}

exports.deleteRecord = async (req, res, next) => {
  try {
    const record = await Record.findByIdAndDelete(req.params.id);
    res.status(200).send(record)
  } catch (error) {
    next(error)
  }
  // const { id } = req.params;
  // const record = db
  //   .get('records')
  //   .remove({ id })
  //   .write();

  // res.status(200).send(record);
};

exports.updateRecord = async (req, res, next) => {
  try {
    const record = await Record.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!record) throw new createError.NotFound();
    res.status(200).send(record);

  } catch (error) {
    next(error)
  }
  // const { id } = req.params;
  // const data = req.body;

  // const record = db
  //   .get('records')
  //   .find({ id })
  //   .assign(data)
  //   .write();

  // res.status(200).send(record);
};
