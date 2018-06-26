var pg = require('pg');

var connectionString = "postgres://galaxy1:12345@localhost:5432/rayitodesol";

var pgClient = new pg.Client(connectionString);

var query = pgClient.query("SELECT * from t_saludo where id = '1'");

query.on("row", function(row,result){

    result.addRow(row);

});