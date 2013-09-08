/* Translators (2009 onwards):
 *  - ToliÃÂÃÂ±o
 */

/**
 * @requires OpenLayers/Lang.js
 */

/**
 * Namespace: OpenLayers.Lang["gl"]
 * Dictionary for Galego.  Keys for entries are used in calls to
 *     <OpenLayers.Lang.translate>.  Entry bodies are normal strings or
 *     strings formatted for use with <OpenLayers.String.format> calls.
 */
OpenLayers.Lang["gl"] = OpenLayers.Util.applyDefaults({

    'unhandledRequest': "Solicitude non xerada; a resposta foi: ${statusText}",

    'Permalink': "LigazÃÂÃÂ³n permanente",

    'Overlays': "Capas superpostas",

    'Base Layer': "Capa base",

    'noFID': "Non se pode actualizar a funcionalidade para a que non hai FID.",

    'browserNotSupported': "O seu navegador non soporta a renderizaciÃÂÃÂ³n de vectores. Os renderizadores soportados actualmente son:\n${renderers}",

    'minZoomLevelError': "A propiedade minZoomLevel ÃÂÃÂ© sÃÂÃÂ³ para uso conxuntamente coas capas FixedZoomLevels-descendent. O feito de que esa capa wfs verifique o minZoomLevel ÃÂÃÂ© unha reliquia do pasado. Non podemos, con todo, eliminala sen a posibilidade de non romper as aplicaciÃÂÃÂ³ns baseadas en OL que poidan depender dela. Por iso a estamos deixando obsoleta (a comprobaciÃÂÃÂ³n minZoomLevel de embaixo serÃÂÃÂ¡ eliminada na versiÃÂÃÂ³n 3.0). Por favor, no canto diso use o axuste de resoluciÃÂÃÂ³n mÃÂÃÂ­n/mÃÂÃÂ¡x tal e como estÃÂÃÂ¡ descrito aquÃÂÃÂ­: http://trac.openlayers.org/wiki/SettingZoomLevels",

    'commitSuccess': "TransacciÃÂÃÂ³n WFS: ÃÂÃÂXITO ${response}",

    'commitFailed': "TransacciÃÂÃÂ³n WFS: FALLIDA ${response}",

    'googleWarning': "A capa do Google non puido cargarse correctamente.\x3cbr\x3e\x3cbr\x3ePara evitar esta mensaxe, escolla unha nova capa base no seleccionador de capas na marxe superior dereita.\x3cbr\x3e\x3cbr\x3eProbablemente, isto acontece porque a escritura da librarÃÂÃÂ­a do Google Maps ou ben non foi incluÃÂÃÂ­da ou ben non contÃÂÃÂ©n a clave API correcta para o seu sitio.\x3cbr\x3e\x3cbr\x3eDesenvolvedores: para axudar a facer funcionar isto correctamente, \x3ca href=\'http://trac.openlayers.org/wiki/Google\' target=\'_blank\'\x3epremede aquÃÂÃÂ­\x3c/a\x3e",

    'getLayerWarning': "A capa ${layerType} foi incapaz de cargarse correctamente.\x3cbr\x3e\x3cbr\x3ePara evitar esta mensaxe, escolla unha nova capa base no seleccionador de capas na marxe superior dereita.\x3cbr\x3e\x3cbr\x3eProbablemente, isto acontece porque a escritura da librarÃÂÃÂ­a ${layerLib} non foi ben incluÃÂÃÂ­da.\x3cbr\x3e\x3cbr\x3eDesenvolvedores: para axudar a facer funcionar isto correctamente, \x3ca href=\'http://trac.openlayers.org/wiki/${layerLib}\' target=\'_blank\'\x3epremede aquÃÂÃÂ­\x3c/a\x3e",

    'Scale = 1 : ${scaleDenom}': "Escala = 1 : ${scaleDenom}",

    'W': "O",

    'E': "L",

    'N': "N",

    'S': "S",

    'reprojectDeprecated': "EstÃÂÃÂ¡ usando a opciÃÂÃÂ³n \"reproject\" na capa ${layerName}. Esta opciÃÂÃÂ³n estÃÂÃÂ¡ obsoleta: o seu uso foi deseÃÂÃÂ±ado para a visualizaciÃÂÃÂ³n de datos sobre mapas base comerciais, pero esta funcionalidade debera agora ser obtida utilizando a proxecciÃÂÃÂ³n Spherical Mercator. Hai dispoÃÂÃÂ±ible mÃÂÃÂ¡is informaciÃÂÃÂ³n en http://trac.openlayers.org/wiki/SphericalMercator.",

    'methodDeprecated': "Este mÃÂÃÂ©todo estÃÂÃÂ¡ obsoleto e serÃÂÃÂ¡ eliminado na versiÃÂÃÂ³n 3.0. Por favor, no canto deste use ${newMethod}."

});
