var config = {
style: 'mapbox://styles/pauladono/cmkmyy7r400hz01qu52prh3mv',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoicGF1bGFkb25vIiwiYSI6ImNrbzQ3dzg1djB6bHkycGxwYXIzbXRwbTEifQ.dm953mwtQIbe1cUpFiwjow',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'albers',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Floraciones algales y cambio climático en Lough Neagh',
    subtitle: 'Un análisis geoespacial del territorio y su cuenca.',
    byline: 'Paula Rodriguez Dono',
    footer: 'Source: Northern Ireland Environment Agency (NIEA) <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'right',
            hidden: false,
            title: 'Lough Neagh',
            image: 'https://www.daera-ni.gov.uk/sites/default/files/styles/nigov_full_620_x1/public/images/daera/Lough%20Neagh%20LBAP%20Forum%20023_0.jpg?itok=mkCv1PKe',
            description: 'Situado en Irlanda del Norte, Lough Neagh es el mayor lago de agua dulce de las islas británicas y constituye un elemento clave del sistema ambiental, económico y social de la región. <br>Abastece de agua potable a gran parte de la población, sustenta actividades pesqueras y recreativas, y alberga ecosistemas de alto valor ecológico. Su gran tamaño y escasa profundidad lo hacen especialmente sensible a los cambios ambientales.',
            location: {
                center: [-5.446, 53.718],
                zoom: 5.97,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'El ecosistema está cambiando',
            image: 'https://focus.belfasttelegraph.co.uk/thumbor/2AOMUwZygt6_2eCAHHd945k_Wkc=/315x0:3717x2268/960x640/prod-mh-ireland/3bdc952d-7c3e-495f-92d1-3d009f1fca53/79a5c97b-fc55-4044-a806-17581199815c/3bdc952d-7c3e-495f-92d1-3d009f1fca53.jpg',
            description: 'En los últimos años, este ecosistema ha experimentado una proliferación masiva de algas, especialmente cianobacterias, generando preocupación por sus efectos sobre la calidad del agua, la biodiversidad, la pesca y el abastecimiento humano.<br><br>Las principales estaciones de control del lago, visibles en el mapa, miden parámetros como la temperatura del agua, el oxígeno disuelto y la concentración de nutrientes. Los registros recientes muestran un aumento progresivo de la temperatura del agua, lo que favorece el crecimiento de algas: a mayor temperatura, mayor intensidad y frecuencia de las floraciones.<br><br>Este proceso se ve reforzado por la cuenca hidrográfica del lago, dominada por usos agrícolas y una red de ríos que transporta nutrientes hasta Lough Neagh.',
            location: {
                center: [-6.700, 54.318],
                zoom: 6.81,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Primeras floraciones algales visibles',
            image: 'https://dataspace.copernicus.eu/sites/default/files/media/images/2023-09/2023-09-04-00_00_2023-09-04-23_59_sentinel-2_l2a_true_color4.jpg',
            description: '<i>Floraciones de algas en Lough Neagh, fotografiadas en septiembre de 2023</i><br><br>Aunque existen registros de presencia intermitente de algas en Lough Neagh desde décadas anteriores, los episodios extensos y graves de algas azul-verdosas (cianobacterias) se han intensificado de forma notable en los últimos años, especialmente durante los meses de verano.<br><br>El mapa muestra los primeros puntos donde se detectaron estas floraciones en 2023, un año en el que el fenómeno alcanzó una magnitud y persistencia sin precedentes. Estas primeras detecciones marcaron un punto de inflexión, al evidenciar que las condiciones del lago habían pasado a favorecer episodios de proliferación masiva.<br><br>La rápida expansión posterior confirmó que no se trataba de eventos aislados, sino de un problema estructural del ecosistema.',
            location: {
                center: [-5.739, 54.753],
                zoom: 7.24,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Situación actual',
            image: 'https://focus.belfasttelegraph.co.uk/thumbor/zLOvvOd4A96zH-nL8gAvuSjVnHg=/0x0:1279x853/1280x853/prod-mh-ireland/a9681889-3200-4ae4-b4c9-6372ee6ffa2d/eb3aaf92-9eec-4323-abbd-72a8e8b01f10/a9681889-3200-4ae4-b4c9-6372ee6ffa2d.jpg',
            description: 'El mapa muestra los puntos donde se ha detectado la presencia de floraciones algales en Irlanda del Norte durante el último año, con una concentración especialmente elevada en Lough Neagh y en el río Lower Bann, principal curso fluvial que conecta el lago con la costa.<br><br>Lejos de tratarse de episodios puntuales, la recurrencia de detecciones confirma que las floraciones algales se han convertido en un problema persistente, con impactos directos sobre la calidad del agua, los ecosistemas acuáticos y los usos humanos del lago.<br><br>Esta situación subraya la urgencia de comprender y gestionar los factores que favorecen estas proliferaciones para proteger el futuro de Lough Neagh.',
            location: {
                center: [-5.739, 54.753],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};

