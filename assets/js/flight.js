
async function onSubmit() {
	var dest = document.getElementById("destination").value;
    await fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/IE/EUR/en-IE/DUB-sky/${dest}-sky/anytime?inboundpartialdate=anytimes`, {
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
			console.log(data.Quotes);
			const html = data.Quotes.map(flight => {
				return `
				<div class="flight">
				<p>${flight.Carriers}</p>
				<p>${flight.Currencies}</p>
				<p>${flight.Direct}</p>
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
onSubmit();
