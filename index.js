var url = require("url"),
  crypto = require("crypto");

var signGMapsURL = function(urlToSign, webSafeKey) {
  var b64Key = fromWebSafeBase64(webSafeKey);
  var path = url.parse(urlToSign).path;
  var hmac = crypto.createHmac("sha1", new Buffer(b64Key, "base64"));
  hmac.update(path);
  return urlToSign + "&signature=" + toWebSafeBase64(hmac.digest("base64"));
};

function toWebSafeBase64(b64) {
  return b64.replace("+", "-").replace("/", "_");
}

function fromWebSafeBase64(b64) {
  return b64.replace("-", "+").replace("_", "/");
}

module.exports = signGMapsURL;
