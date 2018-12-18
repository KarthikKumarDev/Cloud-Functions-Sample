var _data = require('./data');
var helpers = require('./helpers');
var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze('Cats are stupid.');
console.dir(result);

/*
 *  Request Handlers
 */
// Define the handlers
var handlers = {};

handlers.text = function (data, callback) {
    var sentiment = new Sentiment();
    var result = sentiment.analyze(data.payload.text);
    callback(200, result);
};

handlers.ping = function (data, callback) {
    callback(200);
};

// Not found handler
handlers.notFound = function (data, callback) {
    callback(404);
};

module.exports = handlers