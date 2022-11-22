function initMap(){
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
	center: { lat: 41.88233, lng: -87.62327},
  });
  
}

window.initMap = initMap;