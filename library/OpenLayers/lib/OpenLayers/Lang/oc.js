/* Translators (2009 onwards):
 *  - Cedric31
 */

/**
 * @requires OpenLayers/Lang.js
 */

/**
 * Namespace: OpenLayers.Lang["oc"]
 * Dictionary for Occitan.  Keys for entries are used in calls to
 *     <OpenLayers.Lang.translate>.  Entry bodies are normal strings or
 *     strings formatted for use with <OpenLayers.String.format> calls.
 */
OpenLayers.Lang["oc"] = OpenLayers.Util.applyDefaults({

    'unhandledRequest': "RequÃÂÃÂ¨sta pas gerida, retorna ${statusText}",

    'Permalink': "Permaligam",

    'Overlays': "Calques",

    'Base Layer': "Calc de basa",

    'noFID': "Impossible de metre a jorn un objÃÂÃÂ¨cte sens identificant (fid).",

    'browserNotSupported': "VÃÂÃÂ²stre navegidor supÃÂÃÂ²rta pas lo rendut vectorial. Los renderers actualament suportats son : \n${renderers}",

    'minZoomLevelError': "La proprietat minZoomLevel deu ÃÂÃÂ¨sser utilizada solament per de jaces FixedZoomLevels-descendent. Lo fach qu\'aqueste jaÃÂÃÂ§ WFS verifique la presÃÂÃÂ©ncia de minZoomLevel es una relica del passat. ÃÂÃÂaquelÃÂÃÂ , la podÃÂÃÂ¨m suprimir sens copar d\'aplicacions que ne poiriÃÂÃÂ¡n dependre. Es per aquÃÂÃÂ² que la depreciam -- la verificacion del minZoomLevel serÃÂÃÂ  suprimida en version 3.0. A la plaÃÂÃÂ§a, mercÃÂÃÂ©s d\'utilizar los paramÃÂÃÂ¨tres de resolucions min/max tal coma descrich sus : http://trac.openlayers.org/wiki/SettingZoomLevels",

    'commitSuccess': "Transaccion WFS : SUCCES ${response}",

    'commitFailed': "Transaccion WFS : FRACAS ${response}",

    'googleWarning': "Lo jaÃÂÃÂ§ Google es pas estat en mesura de se cargar corrÃÂÃÂ¨ctament.\x3cbr\x3e\x3cbr\x3ePer suprimir aqueste messatge, causissÃÂÃÂ¨tz una BaseLayer novÃÂÃÂ¨la dins lo selector de jaÃÂÃÂ§ en naut a drecha.\x3cbr\x3e\x3cbr\x3eAquÃÂÃÂ² es possiblament causat par la non-inclusion de la librariÃÂÃÂ¡ Google Maps, o alara perque que la clau de l\'API correspond pas a vÃÂÃÂ²stre site.\x3cbr\x3e\x3cbr\x3eDesvolopaires : per saber cossÃÂÃÂ­ corregir aquÃÂÃÂ², \x3ca href=\'http://trac.openlayers.org/wiki/Google\' target=\'_blank\'\x3eclicatz aicÃÂÃÂ­\x3c/a\x3e",

    'getLayerWarning': "Lo jaÃÂÃÂ§ ${layerType} es pas en mesura de se cargar corrÃÂÃÂ¨ctament.\x3cbr\x3e\x3cbr\x3ePer suprimir aqueste messatge, causissÃÂÃÂ¨tz una  BaseLayer novÃÂÃÂ¨la dins lo selector de jaÃÂÃÂ§ en naut a drecha.\x3cbr\x3e\x3cbr\x3eAquÃÂÃÂ² es possiblament causat per la non-inclusion de la librariÃÂÃÂ¡ ${layerLib}.\x3cbr\x3e\x3cbr\x3eDesvolopaires : per saber cossÃÂÃÂ­ corregir aquÃÂÃÂ­, \x3ca href=\'http://trac.openlayers.org/wiki/${layerLib}\' target=\'_blank\'\x3eclicatz aicÃÂÃÂ­\x3c/a\x3e",

    'Scale = 1 : ${scaleDenom}': "Escala ~ 1 : ${scaleDenom}",

    'W': "O",

    'E': "ÃÂÃÂ",

    'N': "N",

    'S': "S",

    'reprojectDeprecated': "Utilizatz l\'opcion \'reproject\' sul jaÃÂÃÂ§ ${layerName}. Aquesta opcion es despreciada : Son usatge permetiÃÂÃÂ¡ d\'afichar de donadas al dessÃÂÃÂºs de jaces raster comercials. Aquesta foncionalitat ara es suportada en utilizant lo supÃÂÃÂ²rt de la projeccion Mercator Esferica. Mai d\'informacion es disponibla sus http://trac.openlayers.org/wiki/SphericalMercator.",

    'methodDeprecated': "Aqueste metÃÂÃÂ²de es despreciada, e serÃÂÃÂ  suprimida a la version 3.0. MercÃÂÃÂ©s d\'utilizar ${newMethod} a la plaÃÂÃÂ§a."

});
