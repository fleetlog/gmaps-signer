# gmaps-signer
`gmaps-signer` is a small package which allows you to sign requests to Google Maps
API for Work Web Services according to the [specification](https://developers.google.com/maps/documentation/business/webservices/auth).

The module is a single function which accepts a URL (with or without a
hostname) and your web-safe Base64 encoded signing key and returns the URL with
the `&signature=...` part appended.

## Example
```javascript
var sign = require("gmaps-signer")
// Can also be called with just /maps/api/geocode/json?latlng=0,0&client=gme-yourclientid
var signed = sign("https://maps.googleapis.com/maps/api/geocode/json?latlng=0,0&client=gme-yourclientid", "Y0ur-Api-S1gn1NG-kEyHERE=")

signed == "https://maps.googleapis.com/maps/api/geocode/json?latlng=0,0&client=gme-yourclientid&signature=gbtkKNR9gWP7AYeMUjKsEV4OQZY=" //true
```
