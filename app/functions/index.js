/*
 *  Primary file for the API
 *
*/
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
var Sentiment = require('sentiment');


exports.textAnalysis = functions.https.onRequest((req, res) => {
    var sentiment = new Sentiment();
    var result = sentiment.analyze(req.body.text);
    console.log(result);
    return res.send(200, result);
});