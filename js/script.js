function initMap(){
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
	center: { lat: 41.88233, lng: -87.62327},
  });
  
  var marker = new google.maps.Marker({
    position: { lat: 41.88233, lng: -87.62327},
	map: map,
  });
  
  var infowindow = new google.maps.InfoWindow({
    content: "This is info"
  });
  
  infowindow.open(map, marker);
}

window.initMap = initMap;