var pg = require('pg');
var connectionString = 'postgres://jduser_rw:password@localhost:5432/jddb';
var client = new pg.Client(connectionString);
client.connect(function (err) {
  if (err) {
  	console.log('*********************************err********************',err);
  	throw err;
  }
});
function getConditions(req, res, next) {
	req.dbQuery= 'select * from conditions';
	req.parameters = [];
	next();
};
function getDoctors(req, res, next){
	req.dbQuery = "select * from userratings where condition='"+req.query.condition+"'";
	console.log('req.dbQuery', req.dbQuery);
	req.parameters = [];
	next();
};
function queryDB(req, res){
	var query = client.query(req.dbQuery, req.parameters, function (err, result) {
	    if (err) throw err;
	 
	    // just print the result to the console 
	    console.log(result.rows, result.rows.length); // outputs: { name: 'brianc' } 
	 	return res.send({
	 		status: 'success',
	 		conditions: result.rows
	 	});
	    // disconnect the client 
	    client.end(function (err) {
	      if (err) throw err;
	    });
	  });
	query.on('end', function() { 
		//client.end();
		 });
}
exports.getConditions = getConditions;
exports.getDoctors = getDoctors;
exports.queryDB = queryDB;