function keyBy(list, keyName, valueName) {
	let mapByKey = {};
	list.forEach(eachItem => {
		mapByKey[eachItem[keyName]] = eachItem[valueName]
	});
	return mapByKey;
}
async function onSubmit() {
	var dest = document.getElementById("destination").value;
    await fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/IE/EUR/en-IE/DUB-sky/${dest}-sky/anytime?inboundpartialdate=anytime`, {
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
	    		const {Carriers, Quotes, Places} = data;
	    		const carriersByIdMap = keyBy(Carriers, 'CarrierId', 'Name');
			const placesByIdMap = keyBy(Places, 'PlaceId', 'Name');
	    		const topQuotes = Quotes.slice(0, 10);
	    debugger;
			const html = topQuotes.map(eachQuote => {
				return `
				<div class="flight">
				<p>From: ${placesByIdMap[eachQuote.OutboundLeg.OriginId]}</p>
				<p>To: ${placesByIdMap[eachQuote.OutboundLeg.DestinationId]}</p>
				<p>Price: EUR ${eachQuote.MinPrice}</p>
				<p>Is Direct: ${eachQuote.Direct}</p>
				<p>Departure Date: ${eachQuote.OutboundLeg.DepartureDate}</p>
				</div>`
			})
			.join("");
			document
			.querySelector('#s-result')
			.insertAdjacentHTML("afterbegin", html);
		})
		.catch(error => {
			console.log(error);
		});
}
