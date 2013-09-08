/**
 * @requires OpenLayers/Lang.js
 */

/**
 * Namespace: OpenLayers.Lang["es"]
 * Dictionary for Spanish, UTF8 encoding. Keys for entries are used in calls to
 *     <OpenLayers.Lang.translate>.  Entry bodies are normal strings or
 *     strings formatted for use with <OpenLayers.String.format> calls.
 */
OpenLayers.Lang.es = {

    'unhandledRequest': "Respuesta a peticiÃÂÃÂ³n no gestionada ${statusText}",

    'Permalink': "Enlace permanente",

    'Overlays': "Capas superpuestas",

    'Base Layer': "Capa Base",

    'noFID': "No se puede actualizar un elemento para el que no existe FID.",

    'browserNotSupported':
        "Su navegador no soporta renderizaciÃÂÃÂ³n vectorial. Los renderizadores soportados actualmente son:\n${renderers}",

    // console message
    'minZoomLevelError':
        "La propiedad minZoomLevel debe sÃÂÃÂ³lo utilizarse " +
        "con las capas que tienen FixedZoomLevels. El hecho de que " +
        "una capa wfs compruebe minZoomLevel es una reliquia del " +
        "pasado. Sin embargo, no podemos eliminarla sin discontinuar " +
        "probablemente las aplicaciones OL que puedan depender de ello. " +
        "AsÃÂÃÂ­ pues estamos haciÃÂÃÂ©ndolo obsoleto --la comprobaciÃÂÃÂ³n " +
        "minZoomLevel se eliminarÃÂÃÂ¡ en la versiÃÂÃÂ³n 3.0. Utilice el ajuste " +
        "de resolution min/max en su lugar, tal como se describe aquÃÂÃÂ­: " +
        "http://trac.openlayers.org/wiki/SettingZoomLevels",

    'commitSuccess': "TransacciÃÂÃÂ³n WFS: ÃÂÃÂXITO ${response}",

    'commitFailed': "TransacciÃÂÃÂ³n WFS: FALLÃÂÃÂ ${response}",

    'googleWarning':
        "La capa Google no pudo ser cargada correctamente.<br><br>" +
        "Para evitar este mensaje, seleccione una nueva Capa Base " +
        "en el selector de capas en la esquina superior derecha.<br><br>" +
        "Probablemente, esto se debe a que el script de la biblioteca de " +
	"Google Maps no fue correctamente incluido en su pÃÂÃÂ¡gina, o no " +
	"contiene la clave del API correcta para su sitio.<br><br>" +
        "Desarrolladores: Para ayudar a hacer funcionar esto correctamente, " +
        "<a href='http://trac.openlayers.org/wiki/Google' " +
        "target='_blank'>haga clic aquÃÂÃÂ­</a>",

    'getLayerWarning':
        "La capa ${layerType} no pudo ser cargada correctamente.<br><br>" +
        "Para evitar este mensaje, seleccione una nueva Capa Base " +
        "en el selector de capas en la esquina superior derecha.<br><br>" +
        "Probablemente, esto se debe a que el script de " +
	"la biblioteca ${layerLib} " +
        "no fue correctamente incluido en su pÃÂÃÂ¡gina.<br><br>" +
        "Desarrolladores: Para ayudar a hacer funcionar esto correctamente, " +
        "<a href='http://trac.openlayers.org/wiki/${layerLib}' " +
        "target='_blank'>haga clic aquÃÂÃÂ­</a>",

    'Scale = 1 : ${scaleDenom}': "Escala = 1 : ${scaleDenom}",

    //labels for the graticule control
    'W': 'O',
    'E': 'E',
    'N': 'N',
    'S': 'S',
    'Graticule': 'RetÃÂÃÂ­cula',
    
    // console message
    'reprojectDeprecated':
        "EstÃÂÃÂ¡ usando la opciÃÂÃÂ³n 'reproject' en la capa " +
        "${layerName}. Esta opciÃÂÃÂ³n es obsoleta: su uso fue diseÃÂÃÂ±ado " +
        "para soportar la visualizaciÃÂÃÂ³n de datos sobre mapas base comerciales, " + 
        "pero ahora esa funcionalidad deberÃÂÃÂ­a conseguirse mediante el soporte " +
        "de la proyecciÃÂÃÂ³n Spherical Mercator. MÃÂÃÂ¡s informaciÃÂÃÂ³n disponible en " +
        "http://trac.openlayers.org/wiki/SphericalMercator.",

    // console message
    'methodDeprecated':
        "Este mÃÂÃÂ©todo es obsoleto y se eliminarÃÂÃÂ¡ en la versiÃÂÃÂ³n 3.0. " +
        "Por favor utilice el mÃÂÃÂ©todo ${newMethod} en su lugar.",

    // **** end ****
    'end': ''

};
