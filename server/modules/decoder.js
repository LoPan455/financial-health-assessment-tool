var admin = require("firebase-admin");
var serviceAccount = require("../firebase-service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fhat-iimn-95572.firebaseio.com"
});

var tokenDecoder = function(req, res, next) {
  if (req.headers.id_token) {
    admin.auth().verifyIdToken(req.headers.id_token).then(function(decodedToken) {
      req.decodedToken = decodedToken;
      next();
    })
    .catch(function(error) {
      console.log('User token unverified');
      res.sendStatus(403);
    });
  } else {
    res.sendStatus(403); // chrome error hanfdling??
  }
}
module.exports = { token: tokenDecoder };
