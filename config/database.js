const mongoose = require('mongoose');
const dbName = 'xdk_db';

module.exports = {
  //connect: ()=> mongoose.connect('mongodb://localhost/' + dbName),
  connect: ()=> mongoose.connect('mongodb://danielreyes:12345@ds213259.mlab.com:13259/xdkdb'),
  dbName,
  connection: ()=> {
    if(mongoose.connection)
      return mongoose.connection;
    return this.connect();
  }
}
