var pg = require('pg');
var connectionString = /*rocess.env.DATABASE_URL ||*/ 'postgres://jduser_rw:password@localhost:5432/jddb';
var client = new pg.Client(connectionString);
client.connect(function (err) {
  if (err) {
  	console.log('*********************************err********************',err);
  	throw err;
  }
});

exports.client = client;/*
//	CREATE TABLE IF NOT EXISTS conditions (id serial,condition varchar(256) UNIQUE NOT NULL)
var query = client.query('select * from conditions', function (err, result) {
    if (err) throw err;
 
    // just print the result to the console 
    console.log(result.rows, result.rows.length); // outputs: { name: 'brianc' } 
 
    // disconnect the client 
    client.end(function (err) {
      if (err) throw err;
    });
  });
query.on('end', function() { client.end(); });

*/