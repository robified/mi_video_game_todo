var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useCreateIndex: true}
);

var db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected on MongoDB ${db.name} at ${db.host}:${db.port}.`);
});