/* Translators (2009 onwards):
 *  - Damouns
 *  - IAlex
 */

/**
 * @requires OpenLayers/Lang.js
 */

/**
 * Namespace: OpenLayers.Lang["fr"]
 * Dictionary for FranÃÂÃÂ§ais.  Keys for entries are used in calls to
 *     <OpenLayers.Lang.translate>.  Entry bodies are normal strings or
 *     strings formatted for use with <OpenLayers.String.format> calls.
 */
OpenLayers.Lang["fr"] = OpenLayers.Util.applyDefaults({

    'unhandledRequest': "RequÃÂÃÂªte non gÃÂÃÂ©rÃÂÃÂ©e, retournant ${statusText}",

    'Permalink': "Permalien",

    'Overlays': "Calques",

    'Base Layer': "Calque de base",

    'noFID': "Impossible de mettre ÃÂÃÂ  jour un objet sans identifiant (fid).",

    'browserNotSupported': "Votre navigateur ne supporte pas le rendu vectoriel. Les renderers actuellement supportÃÂÃÂ©s sont : \n${renderers}",

    'minZoomLevelError': "La propriÃÂÃÂ©tÃÂÃÂ© minZoomLevel doit seulement ÃÂÃÂªtre utilisÃÂÃÂ©e pour des couches FixedZoomLevels-descendent. Le fait que cette couche WFS vÃÂÃÂ©rifie la prÃÂÃÂ©sence de minZoomLevel est une relique du passÃÂÃÂ©. Nous ne pouvons toutefois la supprimer sans casser des applications qui pourraient en dÃÂÃÂ©pendre. C\'est pourquoi nous la dÃÂÃÂ©prÃÂÃÂ©cions -- la vÃÂÃÂ©rification du minZoomLevel sera supprimÃÂÃÂ©e en version 3.0. A la place, merci d\'utiliser les paramÃÂÃÂ¨tres de rÃÂÃÂ©solutions min/max tel que dÃÂÃÂ©crit sur : http://trac.openlayers.org/wiki/SettingZoomLevels",

    'commitSuccess': "Transaction WFS : SUCCES ${response}",

    'commitFailed': "Transaction WFS : ECHEC ${response}",

    'googleWarning': "La couche Google n\'a pas ÃÂÃÂ©tÃÂÃÂ© en mesure de se charger correctement.\x3cbr\x3e\x3cbr\x3ePour supprimer ce message, choisissez une nouvelle BaseLayer dans le sÃÂÃÂ©lecteur de couche en haut ÃÂÃÂ  droite.\x3cbr\x3e\x3cbr\x3eCela est possiblement causÃÂÃÂ© par la non-inclusion de la librairie Google Maps, ou alors parce que la clÃÂÃÂ© de l\'API ne correspond pas ÃÂÃÂ  votre site.\x3cbr\x3e\x3cbr\x3eDÃÂÃÂ©veloppeurs : pour savoir comment corriger ceci, \x3ca href=\'http://trac.openlayers.org/wiki/Google\' target=\'_blank\'\x3ecliquez ici\x3c/a\x3e",

    'getLayerWarning': "La couche ${layerType} n\'est pas en mesure de se charger correctement.\x3cbr\x3e\x3cbr\x3ePour supprimer ce message, choisissez une nouvelle BaseLayer dans le sÃÂÃÂ©lecteur de couche en haut ÃÂÃÂ  droite.\x3cbr\x3e\x3cbr\x3eCela est possiblement causÃÂÃÂ© par la non-inclusion de la librairie ${layerLib}.\x3cbr\x3e\x3cbr\x3eDÃÂÃÂ©veloppeurs : pour savoir comment corriger ceci, \x3ca href=\'http://trac.openlayers.org/wiki/${layerLib}\' target=\'_blank\'\x3ecliquez ici\x3c/a\x3e",

    'Scale = 1 : ${scaleDenom}': "Echelle ~ 1 : ${scaleDenom}",

    'W': "O",

    'E': "E",

    'N': "N",

    'S': "S",

    'reprojectDeprecated': "Vous utilisez l\'option \'reproject\' sur la couche ${layerName}. Cette option est dÃÂÃÂ©prÃÂÃÂ©ciÃÂÃÂ©e : Son usage permettait d\'afficher des donnÃÂÃÂ©es au dessus de couches raster commerciales.Cette fonctionalitÃÂÃÂ© est maintenant supportÃÂÃÂ©e en utilisant le support de la projection Mercator SphÃÂÃÂ©rique. Plus d\'information est disponible sur http://trac.openlayers.org/wiki/SphericalMercator.",

    'methodDeprecated': "Cette mÃÂÃÂ©thode est dÃÂÃÂ©prÃÂÃÂ©ciÃÂÃÂ©e, et sera supprimÃÂÃÂ©e ÃÂÃÂ  la version 3.0. Merci d\'utiliser ${newMethod} ÃÂÃÂ  la place.",

    'proxyNeeded': "Vous avez trÃÂÃÂ¨s probablement besoin de renseigner OpenLayers.ProxyHost pour accÃÂÃÂ©der ÃÂÃÂ  ${url}. Voir http://trac.osgeo.org/openlayers/wiki/FrequentlyAskedQuestions#ProxyHost"
});
