const Configuration = require('../models/Configuration');
// commit 
exports.getConfiguration = async (req, res) => {
  try {
    const config = await Configuration.findOne({ configId: req.params.id });
    if (config) {
      res.json(config);
    } else {
      res.status(404).send('Configuration not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateRemark = async (req, res) => {
  try {
    const config = await Configuration.findOneAndUpdate(
      { configId: req.params.id },
      { remark
        : req.body.remark },
      { new: true }
    );
    if (config) {
      res.json({ message: 'success' });
    } else {
      res.status(404).send('Configuration not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
