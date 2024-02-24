function loadDoc() {
  const xhttp = new XMLHttpRequest();     // XMLHttpRequest object retrieves data from URL without page refresh
  xhttp.onload = function() {     // onload() event fires when the XMLHttpRequest completes
    document.getElementById("demo").innerHTML = this.responseText;     // responseText is a property of the XMLHttpRequest object
  }
  xhttp.open("GET", "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson");     // optionally async(default)/sync
  xhttp.send();     // initiates request
}
