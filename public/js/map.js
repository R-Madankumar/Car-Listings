// If no coordinates, use Bangalore
const finalCoordinates = (coordinates && coordinates.length === 2)
    ? coordinates
    : [77.5095, 13.0754];
console.log(coordinates);
const map = new maplibregl.Map({
    container: 'my-map',
    style: `https://maps.geoapify.com/v1/styles/klokantech-basic/style.json?apiKey=${mapToken}`,
    center: finalCoordinates,
    zoom: 12
});

map.addControl(new maplibregl.NavigationControl());

new maplibregl.Marker({ color: "red" })
    .setLngLat(finalCoordinates)
    .setPopup(new maplibregl.Popup({ offset: 25 }).setText("You will be here"))
    .addTo(map);
