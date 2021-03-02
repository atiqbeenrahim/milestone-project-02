let fResult="";

function keyBy(list, keyName, valueName) {
	let mapByKey = {};
	list.forEach(eachItem => {
		mapByKey[eachItem[keyName]] = eachItem[valueName]
	});
	return mapByKey;
}
async function onSubmit() {
	var dest = document.getElementById("destination").value;
	var dep = document.getElementById("dep-date").value;
	var rtn =  document.getElementById("rtn-date").value;
    await fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/IE/EUR/en-IE/DUB-sky/${dest}-sky/${dep}?inboundpartialdate=${rtn}`, {
		methor: 'GET',
		headers: {
			"x-rapidapi-key": "1fdda8b8d7msh0ff4bfb2ac7e81ep1bfce7jsnd180ee116950",
			"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
				}
		})
		.then(response => {
			console.log(response);
			if (!response.ok) {
				throw Error("ERROR")
			}
			return response.json();
		})
		.then(data => {
				fResult = data;
				loadData();
			})

		.catch(error => {
			console.log(error);
		});
}

function loadData() {
	window.location.href = "f-result.html";
	const {Carriers, Quotes, Places} = fResult;
	const carriersByIdMap = keyBy(Carriers, 'CarrierId', 'Name');
	const placesByIdMap = keyBy(Places, 'PlaceId', 'Name');
	const topQuotes = Quotes.slice(0, 10);
	const html = topQuotes.map(eachQuote => {
	return `
	<div class="f-details">
	<p>From: ${placesByIdMap[eachQuote.OutboundLeg.OriginId]}</p>
	<p>To: ${placesByIdMap[eachQuote.OutboundLeg.DestinationId]}</p>
	<p>Flight Name: ${carriersByIdMap[eachQuote.OutboundLeg.CarrierIds[0]]}</p>
	<p>Price: EUR ${eachQuote.MinPrice}</p>
	<p>Is Direct: ${eachQuote.Direct}</p>
	<p>Departure Date: ${eachQuote.OutboundLeg.DepartureDate}</p>
	</div>`
})
.join('');
			localStorage.setItem('html', html);
		}
