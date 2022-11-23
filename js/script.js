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
    content: "This is the Cloud Gate in Millenium Park"
  });
  
  infowindow.open(map, marker);
  
  var coords = [
    { lat: 41.8844, lng: -87.6244}, 
	{ lat: 41.8809, lng: -87.6243}, 
	{ lat:  41.8809, lng: -87.6175}, 
	{ lat: 41.8844, lng: -87.6143},
	{ lat: 41.8844, lng: -87.6244},
  ];
  
  var park = new google.maps.Polygon({
    paths: coords,
	strokeColor: "#0000FF",
	strokeWeight: 3,
	fillColor: "#ADD8E6",
	fillOpacity: 0.25,
	map: map
  });
}

window.initMap = initMap;