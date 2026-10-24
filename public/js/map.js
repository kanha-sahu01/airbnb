const map = new mapboxgl.Map({
    accessToken: mapToken,
    container: "map",
    style: "mapbox://styles/mapbox/standard",
    projection: "mercator",
    zoom: 9,
    center:coordinates
});
console.log(coordinates)

const marker= new mapboxgl.Marker()
   .setLngLat(coordinates)
   .setPopup( new mapboxgl.Popup({ closeOnClick: false })
    .setHTML
    ("hii")
)
   .addTo(map);