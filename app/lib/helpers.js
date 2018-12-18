/*
 * Helpers for various tasks 
 */

var config = require('./config');

// Container for all the helpers
var helpers = {};

// Parse a JSON string to an Object in all cases without throwing errors
helpers.parseJsonToObject = function (str) {
    try {
        var object = JSON.parse(str);
        return object;
    } catch (e) {
        return {};
    }
}

// Export the module 
module.exports = helpers;