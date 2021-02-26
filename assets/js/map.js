var map;
function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		zoom: 13,
		center: {
			lat: 53.28758963736527,
			lng: -6.365464299036272
		},
	});
	marker = new google.maps.Marker({
		map,
		label: 'HO',
		draggable: true,
		animation: google.maps.Animation.DROP,
		position: { lat: 53.28758963736527, lng: -6.365464299036272 },
	  });
	  marker.addListener("click", toggleBounce);
	}

	function toggleBounce() {
	  if (marker.getAnimation() !== null) {
		marker.setAnimation(null);
	  } else {
		marker.setAnimation(google.maps.Animation.BOUNCE);
	  }
}

function moveMap() {
	switch (document.getElementById("offices").value) {
		case "headoffice":
			map = new google.maps.Map(document.getElementById('map'), {
				zoom: 12,
				center: {
					lat: 53.28758963736527,
					lng: -6.365464299036272,
				},
			});
			new google.maps.Marker({
				position: {
					lat: 53.28758963736527,
					lng:-6.365464299036272,
				},
				 map,
				label: 'HO',
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
			new google.maps.Marker({
				position: {
					lat: 53.34503530812306,
					lng: -6.267437318146202
				},
				 map,
				label: 'BRO',
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
			new google.maps.Marker({
				position: {
					lat: 54.59766859658021,
					lng: -5.930882680741953
				},
				 map,
				label: 'BO',
			});
			break;
	}
}
