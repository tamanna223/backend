const mongoose = require('mongoose');

const configSchema = new mongoose.Schema({
  configurationId: String,
  data: [[String]],
  remark: String,
});

module.exports = mongoose.model('Configuration', configSchema);
