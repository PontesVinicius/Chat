var mongoose = require('mongoose')
  , single_connection
  , env_url = {
    "test": "mongodb://localhost/talk-v_test",
    "development": "mongodb://localhost/talk-v"
  }
;

module.exports = function() {  
  var url = env_url[process.env.NODE_ENV];
  
  if(!single_connection) {
    single_connection = mongoose.connect(url);
  }
  
  return single_connection;
};
