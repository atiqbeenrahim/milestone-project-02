async function makeAPICall(url, headers) {
	const response = await fetch(url, {
		headers,
	    });
	return response.json();
}
async function onSubmit() {
	var destination = document.getElementById("destination").value;
	var dep = document.getElementById("dep-date").value;
	var rtn =  document.getElementById("rtn-date").value;
	var response = await makeAPICall(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/IE/EUR/en/DUB-sky/${destination}-sky/${dep}?inboundpartialdate=${rtn}`,
				 {
					"method": "GET",
					"headers": {
						"x-rapidapi-key": "1fdda8b8d7msh0ff4bfb2ac7e81ep1bfce7jsnd180ee116950",
						"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
				       }
				}
			);
			return response;

}

var result = [];
		var d = [];
		d = response.json;
		for (var i in d) {
			d[i].id = i;
			result.push(d[i]);
		}
		localStorage.setItem("fligtdata", JSON.stringify(result));
		//window.open('./flight.html', '_blank');
		window.location = './flight.html';
