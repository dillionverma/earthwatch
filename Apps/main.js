var wolfram = require(['wolfram-alpha']).createClient("YKRYP5-4U9AKAGR8W");


var results = wolfram.query("integrate 2x")
console.log("Result: %j", results);
