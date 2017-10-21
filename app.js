var blockchain = require('mastercard-blockchain');
var MasterCardAPI = blockchain.MasterCardAPI;

var consumerKey = "mWmHjHrHc8s8arvTX6zLaa0Fc2S67yHLJH-iaOSJ50af731c!d265c13a53a740daaeba3505c251d5a00000000000000000";   // You should copy this from "My Keys" on your project page e.g. UTfbhDCSeNYvJpLL5l028sWL9it739PYh6LU5lZja15xcRpY!fd209e6c579dc9d7be52da93d35ae6b6c167c174690b72fa
var keyStorePath = "./money2020-sandbox-1508625999.js"; // e.g. /Users/yourname/project/sandbox.p12 | C:\Users\yourname\project\sandbox.p12
var keyAlias = "keyalias";   // For production: change this to the key alias you chose when you created your production key
var keyPassword = "keystorepassword";   // For production: change this to the key alias you chose when you created your production key
