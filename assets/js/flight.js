function makeAPICall(url, headers) {
	const response = await fetch(url, {
		headers,
	    });
	return response.json();
}
async function onSubmit() {
	var response = await makeAPICall(
		"https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/referral/v1.0/%7Bcountry%7D/%7Bcurrency%7D/%7Blocale%7D/%7Boriginplace%7D/%7Bdestinationplace%7D/%7Boutboundpartialdate%7D/%7Binboundpartialdate%7D",
		{
			"x-rapidapi-key": "1fdda8b8d7msh0ff4bfb2ac7e81ep1bfce7jsnd180ee116950",
			"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		}
	);
	return response;
};
