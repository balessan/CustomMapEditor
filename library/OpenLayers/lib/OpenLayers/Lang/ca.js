/**
 * @requires OpenLayers/Lang.js
 */

/**
 * Namespace: OpenLayers.Lang["ca"]
 * Dictionary for Catalan, UTF8 encoding. Keys for entries are used in calls to
 *     <OpenLayers.Lang.translate>.  Entry bodies are normal strings or
 *     strings formatted for use with <OpenLayers.String.format> calls.
 */
OpenLayers.Lang.ca = {

    'unhandledRequest': "Resposta a peticiÃÂÃÂ³ no gestionada ${statusText}",

    'Permalink': "EnllaÃÂÃÂ§ permanent",

    'Overlays': "Capes addicionals",

    'Base Layer': "Capa Base",

    'noFID': "No es pot actualitzar un element per al que no existeix FID.",

    'browserNotSupported':
        "El seu navegador no suporta renderitzaciÃÂÃÂ³ vectorial. Els renderitzadors suportats actualment sÃÂÃÂ³n:\n${renderers}",

    // console message
    'minZoomLevelError':
        "La propietat minZoomLevel s'ha d'utilitzar nomÃÂÃÂ©s " +
        "amb les capes que tenen FixedZoomLevels. El fet que " +
        "una capa wfs comprovi minZoomLevel ÃÂÃÂ©s una relÃÂÃÂ­quia del " +
        "passat. No podem, perÃÂÃÂ², eliminar-la sense trencar " +
        "les aplicacions d'OpenLayers que en puguin dependre. " +
        "AixÃÂÃÂ­ doncs estem fent-la obsoleta -- la comprovaciÃÂÃÂ³ " +
        "minZoomLevel s'eliminarÃÂÃÂ  a la versiÃÂÃÂ³ 3.0. Feu servir " +
        "els parÃÂÃÂ metres min/max resolution en substituciÃÂÃÂ³, tal com es descriu aquÃÂÃÂ­: " +
        "http://trac.openlayers.org/wiki/SettingZoomLevels",

    'commitSuccess': "TransacciÃÂÃÂ³ WFS: CORRECTA ${response}",

    'commitFailed': "TransacciÃÂÃÂ³ WFS: HA FALLAT ${response}",

    'googleWarning':
        "La capa Google no s'ha pogut carregar correctament.<br><br>" +
        "Per evitar aquest missatge, seleccioneu una nova Capa Base " +
        "al gestor de capes de la cantonada superior dreta.<br><br>" +
        "Probablement aixÃÂÃÂ² ÃÂÃÂ©s degut a que l'script de la biblioteca de " +
    "Google Maps no ha estat inclÃÂÃÂ²s a la vostra pÃÂÃÂ gina, o no " +
    "contÃÂÃÂ© la clau de l'API correcta per a la vostra adreÃÂÃÂ§a.<br><br>" +
        "Desenvolupadors: Per obtenir consells sobre com fer anar aixÃÂÃÂ², " +
        "<a href='http://trac.openlayers.org/wiki/Google' " +
        "target='_blank'>fÃÂÃÂ©u clic aquÃÂÃÂ­</a>",

    'getLayerWarning':
        "Per evitar aquest missatge, seleccioneu una nova Capa Base " +
        "al gestor de capes de la cantonada superior dreta.<br><br>" +
        "Probablement aixÃÂÃÂ² ÃÂÃÂ©s degut a que l'script de la biblioteca " +
        "${layerLib} " +
        "no ha estat inclÃÂÃÂ²s a la vostra pÃÂÃÂ gina.<br><br>" +
        "Desenvolupadors: Per obtenir consells sobre com fer anar aixÃÂÃÂ², " +
        "<a href='http://trac.openlayers.org/wiki/${layerLib}' " +
        "target='_blank'>fÃÂÃÂ©u clic aquÃÂÃÂ­</a>",

    'Scale = 1 : ${scaleDenom}': "Escala = 1 : ${scaleDenom}",

    //labels for the graticule control
    'W': 'O',
    'E': 'E',
    'N': 'N',
    'S': 'S',
    'Graticule': 'RetÃÂÃÂ­cula',    
        
    // console message
    'reprojectDeprecated':
        "Esteu fent servir l'opciÃÂÃÂ³ 'reproject' a la capa " +
        "${layerName}. Aquesta opciÃÂÃÂ³ ÃÂÃÂ©s obsoleta: el seu ÃÂÃÂºs fou concebut " +
        "per suportar la visualitzaciÃÂÃÂ³ de dades sobre mapes base comercials, " + 
        "perÃÂÃÂ² ara aquesta funcionalitat s'hauria d'assolir mitjanÃÂÃÂ§ant el suport " +
        "de la projecciÃÂÃÂ³ Spherical Mercator. MÃÂÃÂ©s informaciÃÂÃÂ³ disponible a " +
        "http://trac.openlayers.org/wiki/SphericalMercator.",

    // console message
    'methodDeprecated':
        "Aquest mÃÂÃÂ¨tode ÃÂÃÂ©s obsolet i s'eliminarÃÂÃÂ  a la versiÃÂÃÂ³ 3.0. " +
        "Si us plau feu servir em mÃÂÃÂ¨tode alternatiu ${newMethod}.",

    // **** end ****
    'end': ''

};
