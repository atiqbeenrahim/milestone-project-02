function initMap() {
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 3,
		center: {
			lat: 54.07366927871658,
			lng: -6.280508196282103
		},
	});

	const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	const locations = [{
		lat: 53.28758963736527,
		lng: -6.365464299036272
	}, {
		lat: 53.34503530812306,
		lng: -6.267437318146202
	}, {
		lat: 54.59766859658021,
		lng: -5.930882680741953
	}, ];

	const markers = locations.map((location, i) => {
		return new google.maps.Marker({
			position: location,
			label: labels[i % labels.length],
		});
	});

	new MarkerClusterer(map, markers, {
		imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
	});
}

function moveMap() {
	switch (document.getElementById("offices").value) {
		case "headoffice":
			map = new google.maps.Map(document.getElementById('map'), {
				zoom: 12,
				center: {
					lat: 53.28758963736527,
					lng: -6.365464299036272
				},
			});
			break;
		case "branchoffice":
			map = new google.maps.Map(document.getElementById('map'), {
				zoom: 15,
				center: {
					lat: 53.34503530812306,
					lng: -6.267437318146202
				},

			});
			break;
		case "belfastbranch":
			map = new google.maps.Map(document.getElementById('map'), {
				zoom: 15,
				center: {
					lat: 54.59766859658021,
					lng: -5.930882680741953
				},

			});
			break;
	}
}
