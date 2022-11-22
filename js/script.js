function initMap(){
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
	center: { lat: 41.88233, lng: -87.62327},
  });
  
  var marker = new google.maps.marker({
    position: { lat: 41.88233, lng: -87.62327},
	map: map,
  });
  
  infowindow.open(map, marker);
}

window.initMap = initMap;