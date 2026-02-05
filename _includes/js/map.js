window.conference.map = (() => {
    let config;
    let lang;

    let map;

    const setup = (elId) => {
        const center = config.home_coord;
        map = L.map(elId).setView(center, config.default_zoom);

        L.tileLayer.provider(config.map_provider).addTo(map);

        L.easyButton('far fa-star', () => {
            map.flyTo(config.home_coord, config.default_zoom);
        }, lang.focus_conf).addTo(map);

        L.control.locate({
            flyTo: true,
            strings: {
                title: lang.focus_me
            }
        }).addTo(map);

        let main = L.marker(center, {
            icon: L.divIcon({
                className: '',
                html: '<span class="fas fa-map-marker-alt"></span> Workshop Venue (TBA)',
                iconSize: [120, 56]
            })
        }).addTo(map);
    };

    const init = (c, l) => {
        config = c;
        lang = l;

        const elId = 'map';

        if (document.getElementById(elId)) {
            setup(elId);
        }
    };

    const getMap = () => {
        return map
    };

    return {
        init: init,
        getMap: getMap
    };
})();
