var map = new GMaps({
    el: '#map',
    lat: 21.733667,
    lng: 39.082102,
});

map.addMarker({
    lat: 21.733667,
    lng: 39.082102,
    title: 'Jeddah Economic City'
});

map.setZoom(8);