/* Translators:
 *  - Arkadiusz Grabka
 */

/**
 * @requires OpenLayers/Lang.js
 */

/**
 * Namespace: OpenLayers.Lang["pl"]
 * Dictionary for Polish.  Keys for entries are used in calls to
 *     <OpenLayers.Lang.translate>.  Entry bodies are normal strings or
 *     strings formatted for use with <OpenLayers.String.format> calls.
 */
OpenLayers.Lang["pl"] = OpenLayers.Util.applyDefaults({

    'unhandledRequest': "NieobsÃÂÃÂugiwane ÃÂÃÂ¼ÃÂÃÂdanie zwrÃÂÃÂ³ciÃÂÃÂo ${statusText}",

    'Permalink': "Permalink",

    'Overlays': "NakÃÂÃÂadki",

    'Base Layer': "Warstwa podstawowa",

    'noFID': "Nie moÃÂÃÂ¼na zaktualizowaÃÂÃÂ funkcji, dla ktÃÂÃÂ³rych nie ma FID.",

    'browserNotSupported':
        "Twoja przeglÃÂÃÂdarka nie obsÃÂÃÂuguje renderowania wektorÃÂÃÂ³w. Obecnie obsÃÂÃÂugiwane renderowanie to:\n${renderers}",

    // console message
    'minZoomLevelError':
        "WÃÂÃÂaÃÂÃÂciwoÃÂÃÂÃÂÃÂ minZoomLevel jest przeznaczona tylko do uÃÂÃÂ¼ytku " +
        "z warstwami FixedZoomLevels-descendent." +
        "Warstwa wfs, ktÃÂÃÂ³ra sprawdza minZoomLevel jest reliktem przeszÃÂÃÂoÃÂÃÂci." +
        "Nie moÃÂÃÂ¼emy jej jednak usunÃÂÃÂc bez mozliwoÃÂÃÂci ÃÂÃÂamania OL aplikacji, " +
        "ktÃÂÃÂ³re mogÃÂÃÂ byÃÂÃÂ od niej zaleÃÂÃÂ¼ne. " +
        "Dlatego jesteÃÂÃÂmy za deprecjacjÃÂÃÂ -- minZoomLevel " +
        "zostanie usuniÃÂÃÂta w wersji 3.0. W zamian prosze uÃÂÃÂ¼yj " +
        "min/max rozdzielczoÃÂÃÂci w sposÃÂÃÂ³b opisany tutaj: " +
        "http://trac.openlayers.org/wiki/SettingZoomLevels",

    'commitSuccess': "Transakcja WFS: SUKCES ${response}",

    'commitFailed': "Transakcja WFS: FAILED ${response}",

    'googleWarning':
        "Warstwa Google nie byÃÂÃÂ w stanie zaÃÂÃÂadowaÃÂÃÂ siÃÂÃÂ poprawnie.<br><br>" +
        "Aby pozbyÃÂÃÂ siÃÂÃÂ tej wiadomoÃÂÃÂci, wybierz nowÃÂÃÂ Warstwe podstawowÃÂÃÂ " +
        "w przeÃÂÃÂÃÂÃÂczniku warstw w gÃÂÃÂ³rnym prawym rogu mapy.<br><br>" +
        "Najprawdopodobniej jest to spowodowane tym, ÃÂÃÂ¼e biblioteka Google Maps " +
        "nie jest zaÃÂÃÂadowana, lub nie zawiera poprawnego klucza do API dla twojej strony<br><br>" +
        "Programisto: Aby uzyskaÃÂÃÂ pomoc , " +
        "<a href='http://trac.openlayers.org/wiki/Google' " +
        "target='_blank'>kliknij tutaj</a>",

    'getLayerWarning':
        "Warstwa ${layerType} nie mogÃÂÃÂa zostaÃÂÃÂ zaÃÂÃÂadowana poprawnie.<br><br>" +
		"Aby pozbyÃÂÃÂ siÃÂÃÂ tej wiadomoÃÂÃÂci, wybierz nowÃÂÃÂ Warstwe podstawowÃÂÃÂ " +
        "w przeÃÂÃÂÃÂÃÂczniku warstw w gÃÂÃÂ³rnym prawym rogu mapy.<br><br>" +
        "Najprawdopodobniej jest to spowodowane tym, ÃÂÃÂ¼e biblioteka ${layerLib} " +
        "nie jest zaÃÂÃÂadowana, lub moÃÂÃÂ¼e(o ile biblioteka tego wymaga) " +
		"byc potrzebny klucza do API dla twojej strony<br><br>" +
        "Programisto: Aby uzyskaÃÂÃÂ pomoc , " +
        "<a href='http://trac.openlayers.org/wiki/${layerLib}' " +
        "target='_blank'>kliknij tutaj</a>",

    'Scale = 1 : ${scaleDenom}': "Skala = 1 : ${scaleDenom}",
    
    //labels for the graticule control
    'W': 'ZACH',
    'E': 'WSCH',
    'N': 'PN',
    'S': 'PD',
    'Graticule': 'Siatka',

    // console message
    'reprojectDeprecated':
        "w warstwie ${layerName} uÃÂÃÂ¼ywasz opcji 'reproject'. " +
        "Ta opcja jest przestarzaÃÂÃÂa: " +
        "jej zastosowanie zostaÃÂÃÂ zaprojektowany, aby wspieraÃÂÃÂ wyÃÂÃÂwietlania danych przez komercyjne mapy, "+
		"jednak obecnie ta funkcjonalnoÃÂÃÂÃÂÃÂ powinien zostaÃÂÃÂ osiÃÂÃÂgniÃÂÃÂty za pomocÃÂÃÂ Spherical Mercator " +
		"its use was designed to support displaying data over commercial. WiÃÂÃÂcje informacji na ten temat moÃÂÃÂ¼esz znaleÃÂÃÂºÃÂÃÂ na stronie " + 
        "http://trac.openlayers.org/wiki/SphericalMercator.",

    // console message
    'methodDeprecated':
        "Ta metoda jest przestarzaÃÂÃÂa i bÃÂÃÂdzie usuniÃÂÃÂta od wersji 3.0. " +
        "W zamian uÃÂÃÂ¼yj ${newMethod}.",

    'proxyNeeded': "Prawdopodobnie musisz ustawiÃÂÃÂ OpenLayers.ProxyHost aby otrzymaÃÂÃÂ dostÃÂÃÂp do ${url}."+
        "See http://trac.osgeo.org/openlayers/wiki/FrequentlyAskedQuestions#ProxyHost"

});