function initMap(){
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
	center: { lat: 41.8781, lng: 87.6298},
  });
  
  var marker = new google.maps.Marker({
    position: { lat: 41.8826, lng: -87.6233},
	map: map,
  });
  
  var infowindow = new google.maps.InfoWindow({
    content: "This is the Cloud Gate"
  });
  
  infowindow.open(map, marker);
}

window.initMap = initMap;