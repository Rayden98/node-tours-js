/* eslint-disable */

export const displayMap = (locations) => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoicm95YWxlc2FubWlndWVsIiwiYSI6ImNscW9vaGdlMDNqYjAya21oNGN1YWUwaWQifQ.m0fxyK-YXAarmBd0J8gsEw';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/royalesanmiguel/clqpnz0f200jf01qrc8lo0mzj',
        scrollZoom: false
        // center: [-118.113491, 34.111745],
        // zoom: 10,
    });

    const bounds = new mapboxgl.LngLatBounds();

    locations.forEach(loc => {
        // Create marker
        const el = document.createElement('div');
        el.className = 'marker';

        // Add marker
        new mapboxgl.Marker({
            element: el,
            anchor: 'bottom'
        }).setLngLat(loc.coordinates).addTo(map);

        // Add popup
        new mapboxgl.Popup({
            offset: 30
        })
            .setLngLat(loc.coordinates)
            .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
            .addTo(map)

        // Extend map bounds to include current location
        bounds.extend(loc.coordinates);
    });

    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 50,
            left: 100,
            right: 100
        }
    });

}

