//fragile mysql implementation
var mysql  = require('mysql');
var bcrypt = require('bcrypt');

var connection= mysql.createConnection({
  host     : "",
  port     : "",
  user     : "",
  password : "",
  database : ""
});

exports.initalize = function(callback) {
  var initString = "CREATE TABLE IF NOT EXISTS`items`;";
  query(initString,function(err, result){
        if(err===null) return callback("[DONE] Database connection & setup okay");
        return callback(err);
  });
}

var query = function(queryString,callback) {
  connection.query(queryString, function(err, rows, fields) {
    if(err){ 
      console.log(err);
      callback("[FAIL] Database connection invalid");
    }
    else {
      callback(err, rows);
    }
  });
}
exports.query = query;

