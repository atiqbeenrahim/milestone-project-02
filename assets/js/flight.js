var unirest = require("unirest");

var req = unirest("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/referral/v1.0/%7Bcountry%7D/%7Bcurrency%7D/%7Blocale%7D/%7Boriginplace%7D/%7Bdestinationplace%7D/%7Boutboundpartialdate%7D/%7Binboundpartialdate%7D");

req.query({
	"shortapikey": "ra66933236979928",
	"apiKey": "{shortapikey}"
});

req.headers({
	"x-rapidapi-key": "1fdda8b8d7msh0ff4bfb2ac7e81ep1bfce7jsnd180ee116950",
	"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

$.ajax(settings).done(function (response) {
	console.log(response);
});
