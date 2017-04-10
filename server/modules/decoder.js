var admin = require("firebase-admin");
var serviceAccount = require("../server/firebase-service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fhat-iimn.firebaseio.com"
});


