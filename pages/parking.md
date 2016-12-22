---
layout : parking
title: "Parking"
permalink: /home/parking/
---

<dl>
<dl>
<div class="container">
    <div id="map"></div>
    <section class="sidebar">
        <!-- JS content -->
    </section>
</div><!-- end container -->
    <script>
      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: {lat: 51.05367, lng: 3.7186}
        });
        var labels = ['p7','p10','p1','p4','p8','p2'];
        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }
      var locations = [
        {lat: 51.05367, lng: 3.7186},
        {lat: 51.04171, lng: 3.72557},
        {lat: 51.05652, lng: 3.72595},
        {lat: 51.04862, lng: 3.72225},
        {lat: 51.05532, lng: 3.71653},
        {lat: 51.05207, lng: 3.72981},
      ]
    </script>
    <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js">
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDnuvnUztsM1EQMbqvQqKlYCHG975271M0&callback=initMap">
    </script>
</dl>