/**
 * @requires OpenLayers/Lang.js
 */

/**
 * Namespace: OpenLayers.Lang["da-DK"]
 * Dictionary for Danish.  Keys for entries are used in calls to
 *     <OpenLayers.Lang.translate>.  Entry bodies are normal strings or
 *     strings formatted for use with <OpenLayers.String.format> calls.
 */
OpenLayers.Lang['da-DK'] = {

    'unhandledRequest': "En ikke hÃÂÃÂ¥ndteret forespÃÂÃÂ¸rgsel returnerede ${statusText}",

    'Permalink': "Permalink",

    'Overlays': "Kortlag",

    'Base Layer': "Baggrundslag",

    'noFID': "Kan ikke opdateret en feature (et objekt) der ikke har et FID.",

    'browserNotSupported':
        "Din browser understÃÂÃÂ¸tter ikke vektor visning. FÃÂÃÂ¸lgende vektor visninger understÃÂÃÂ¸ttes:\n${renderers}",

    // console message
    'minZoomLevelError':
        "Egenskaben minZoomLevel er kun beregnet til brug " +
        "med FixedZoomLevels. At dette WFS lag kontrollerer " +
        "minZoomLevel egenskaben, er et levn fra en tidligere " +
        "version. Vi kan desvÃÂÃÂ¦rre ikke fjerne dette uden at risikere " +
        "at ÃÂÃÂ¸delÃÂÃÂ¦gge eksisterende OL baserede programmer der " +
        " benytter denne funktionalitet. " +
        "Egenskaben bÃÂÃÂ¸r derfor ikke anvendes, og minZoomLevel " +
        "kontrollen herunder vil blive fjernet i version 3.0. " +
        "Benyt istedet min/max oplÃÂÃÂ¸snings indstillingerne, som " +
        "er beskrevet her: " +
        "http://trac.openlayers.org/wiki/SettingZoomLevels",

    'commitSuccess': "WFS transaktion: LYKKEDES ${response}",

    'commitFailed': "WFS transaktion: MISLYKKEDES ${response}",

    'googleWarning':
        "Google laget kunne ikke indlÃÂÃÂ¦ses.<br><br>" +
        "For at fjerne denne besked, vÃÂÃÂ¦lg et nyt bagrundskort i " +
        "lagskifteren i ÃÂÃÂ¸verste hÃÂÃÂ¸jre hjÃÂÃÂ¸rne.<br><br>" +
        "Fejlen skyldes formentlig at Google Maps bibliotekts " +
        "scriptet ikke er inkluderet, eller ikke indeholder den " +
        "korrkte API nÃÂÃÂ¸gle for dit site.<br><br>" +
        "Udviklere: For hjÃÂÃÂ¦lp til at fÃÂÃÂ¥ dette til at fungere, " +
        "<a href='http://trac.openlayers.org/wiki/Google' " +
        "target='_blank'>klik her</a>",

    'getLayerWarning':
        "${layerType}-laget kunne ikke indlÃÂÃÂ¦ses.<br><br>" +
        "For at fjerne denne besked, vÃÂÃÂ¦lg et nyt bagrundskort i " +
        "lagskifteren i ÃÂÃÂ¸verste hÃÂÃÂ¸jre hjÃÂÃÂ¸rne.<br><br>" +
        "Fejlen skyldes formentlig at ${layerLib} bibliotekts " +
        "scriptet ikke er inkluderet.<br><br>" +
        "Udviklere: For hjÃÂÃÂ¦lp til at fÃÂÃÂ¥ dette til at fungere, " +
        "<a href='http://trac.openlayers.org/wiki/${layerLib}' " +
        "target='_blank'>klik her</a>",

    'Scale = 1 : ${scaleDenom}': "MÃÂÃÂ¥lforhold = 1 : ${scaleDenom}",

    // console message
    'reprojectDeprecated':
        "Du anvender indstillingen 'reproject' pÃÂÃÂ¥ laget ${layerName}." + 
        "Denne indstilling bÃÂÃÂ¸r ikke lÃÂÃÂ¦ngere anvendes. Den var beregnet " +
        "til at vise data ovenpÃÂÃÂ¥ kommercielle grundkort, men den funktionalitet " +
        "bÃÂÃÂ¸r nu opnÃÂÃÂ¥s ved at anvende Spherical Mercator understÃÂÃÂ¸ttelsen. " +
        "Mere information er tilgÃÂÃÂ¦ngelig her: " +
        "http://trac.openlayers.org/wiki/SphericalMercator.",

    // console message
    'methodDeprecated':
        "Denne funktion bÃÂÃÂ¸r ikke lÃÂÃÂ¦ngere anvendes, og vil blive fjernet i version 3.0. " +
        "Anvend venligst funktionen ${newMethod} istedet."
};
