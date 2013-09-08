/* Translators (2009 onwards):
 *  - Sannab
 */

/**
 * @requires OpenLayers/Lang.js
 */

/**
 * Namespace: OpenLayers.Lang["sv"]
 * Dictionary for Svenska.  Keys for entries are used in calls to
 *     <OpenLayers.Lang.translate>.  Entry bodies are normal strings or
 *     strings formatted for use with <OpenLayers.String.format> calls.
 */
OpenLayers.Lang["sv"] = OpenLayers.Util.applyDefaults({

    'unhandledRequest': "Ej hanterad frÃÂÃÂ¥ga retur ${statusText}",

    'Permalink': "PermalÃÂÃÂ¤nk",

    'Overlays': "Kartlager",

    'Base Layer': "Bakgrundskarta",

    'noFID': "Kan ej uppdatera feature (objekt) fÃÂÃÂ¶r vilket FID saknas.",

    'browserNotSupported': "Din webblÃÂÃÂ¤sare stÃÂÃÂ¶der inte vektorvisning. FÃÂÃÂ¶r nÃÂÃÂ¤rvarande stÃÂÃÂ¶ds fÃÂÃÂ¶ljande visning:\n${renderers}",

    'minZoomLevelError': "Egenskapen minZoomLevel ÃÂÃÂ¤r endast avsedd att anvÃÂÃÂ¤ndas med lager med FixedZoomLevels. Att detta WFS-lager kontrollerar minZoomLevel ÃÂÃÂ¤r en relik frÃÂÃÂ¥n ÃÂÃÂ¤ldre versioner. Vi kan dock inte ta bort det utan att riskera att OL-baserade tillÃÂÃÂ¤mpningar som anvÃÂÃÂ¤nder detta slutar fungera. DÃÂÃÂ¤rfÃÂÃÂ¶r ÃÂÃÂ¤r det satt som deprecated, minZoomLevel kommer att tas bort i version 3.0. AnvÃÂÃÂ¤nd i stÃÂÃÂ¤llet instÃÂÃÂ¤llning av min/max resolution som beskrivs hÃÂÃÂ¤r: http://trac.openlayers.org/wiki/SettingZoomLevels",

    'commitSuccess': "WFS-transaktion: LYCKADES ${response}",

    'commitFailed': "WFS-transaktion: MISSLYCKADES ${response}",

    'googleWarning': "Google-lagret kunde inte laddas korrekt.\x3cbr\x3e\x3cbr\x3eFÃÂÃÂ¶r att slippa detta meddelande, vÃÂÃÂ¤lj en annan bakgrundskarta i lagervÃÂÃÂ¤ljaren i ÃÂÃÂ¶vre hÃÂÃÂ¶gra hÃÂÃÂ¶rnet.\x3cbr\x3e\x3cbr\x3eSannolikt beror felet pÃÂÃÂ¥ att Google Maps-biblioteket inte ÃÂÃÂ¤r inkluderat pÃÂÃÂ¥ webbsidan eller pÃÂÃÂ¥ att sidan inte anger korrekt API-nyckel fÃÂÃÂ¶r webbplatsen.\x3cbr\x3e\x3cbr\x3eUtvecklare: hjÃÂÃÂ¤lp fÃÂÃÂ¶r att ÃÂÃÂ¥tgÃÂÃÂ¤rda detta, \x3ca href=\'http://trac.openlayers.org/wiki/Google\' target=\'_blank\'\x3eklicka hÃÂÃÂ¤r\x3c/a\x3e.",

    'getLayerWarning': "${layerType}-lagret kunde inte laddas korrekt.\x3cbr\x3e\x3cbr\x3eFÃÂÃÂ¶r att slippa detta meddelande, vÃÂÃÂ¤lj en annan bakgrundskarta i lagervÃÂÃÂ¤ljaren i ÃÂÃÂ¶vre hÃÂÃÂ¶gra hÃÂÃÂ¶rnet.\x3cbr\x3e\x3cbr\x3eSannolikt beror felet pÃÂÃÂ¥ att ${layerLib}-biblioteket inte ÃÂÃÂ¤r inkluderat pÃÂÃÂ¥ webbsidan.\x3cbr\x3e\x3cbr\x3eUtvecklare: hjÃÂÃÂ¤lp fÃÂÃÂ¶r att ÃÂÃÂ¥tgÃÂÃÂ¤rda detta, \x3ca href=\'http://trac.openlayers.org/wiki/${layerLib}\' target=\'_blank\'\x3eklicka hÃÂÃÂ¤r\x3c/a\x3e.",

    'Scale = 1 : ${scaleDenom}': "\x3cstrong\x3eSkala\x3c/strong\x3e 1 : ${scaleDenom}",

    'reprojectDeprecated': "Du anvÃÂÃÂ¤nder instÃÂÃÂ¤llningen \'reproject\' pÃÂÃÂ¥ lagret ${layerName}. Denna instÃÂÃÂ¤llning markerad som deprecated: den var avsedd att anvÃÂÃÂ¤ndas fÃÂÃÂ¶r att stÃÂÃÂ¶dja visning av kartdata pÃÂÃÂ¥ kommersiella bakgrundskartor, men nu bÃÂÃÂ¶r man i stÃÂÃÂ¤llet anvÃÂÃÂ¤nda Spherical Mercator-stÃÂÃÂ¶d fÃÂÃÂ¶r den funktionaliteten. Mer information finns pÃÂÃÂ¥ http://trac.openlayers.org/wiki/SphericalMercator.",

    'methodDeprecated': "Denna metod ÃÂÃÂ¤r markerad som deprecated och kommer att tas bort i 3.0. AnvÃÂÃÂ¤nd ${newMethod} i stÃÂÃÂ¤llet."

});
