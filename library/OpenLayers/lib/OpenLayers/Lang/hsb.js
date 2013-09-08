/* Translators (2009 onwards):
 *  - Michawiki
 */

/**
 * @requires OpenLayers/Lang.js
 */

/**
 * Namespace: OpenLayers.Lang["hsb"]
 * Dictionary for Hornjoserbsce.  Keys for entries are used in calls to
 *     <OpenLayers.Lang.translate>.  Entry bodies are normal strings or
 *     strings formatted for use with <OpenLayers.String.format> calls.
 */
OpenLayers.Lang["hsb"] = OpenLayers.Util.applyDefaults({

    'unhandledRequest': "WotmoÃÂÃÂwa njewobdÃÂÃÂºÃÂÃÂÃÂÃÂaneho napraÃÂÃÂ¡owanja ${statusText}",

    'Permalink': "Trajny wotkaz",

    'Overlays': "NaworÃÂÃÂ¡towanja",

    'Base Layer': "ZakÃÂÃÂadna runina",

    'noFID': "Funkcija, za kotruÃÂÃÂ¾ FID njeje, njeda so aktualizowaÃÂÃÂ.",

    'browserNotSupported': "TwÃÂÃÂ³j wobhladowak wektorowe rysowanje njepodpÃÂÃÂruje. Tuchwilu podpÃÂÃÂrowane rysowaki su:\n${renderers}",

    'minZoomLevelError': "KajkosÃÂÃÂ minZoomLevel je jenoÃÂÃÂ¾ za wuÃÂÃÂ¾iwanje z worÃÂÃÂ¡tami myslena, kotreÃÂÃÂ¾ wot FixedZoomLevels pochadÃÂÃÂºeja. Zo tuta worÃÂÃÂ¡ta wfs za minZoomLevel pÃÂÃÂepruwuje, je relikt zaÃÂÃÂdÃÂÃÂºenosÃÂÃÂe. NjemÃÂÃÂ³ÃÂÃÂ¾emy wÃÂÃÂ¡ak ju wotstroniÃÂÃÂ, bjeztoho zo aplikacije, kotreÃÂÃÂ¾ na OpenLayers bazÃÂÃÂruja a snano tutu kajkosÃÂÃÂ wuÃÂÃÂ¾iwaja, hiÃÂÃÂ¾o njefunguja. Tohodla smy ju jako zestarjenu woznamjenili -- pÃÂÃÂepruwowanje za minZoomLevel budu so we wersiji 3.0 wotstronjeÃÂÃÂ. ProÃÂÃÂ¡u wuÃÂÃÂ¾ij mÃÂÃÂsto toho nastajenje min/max, kaÃÂÃÂ¾ je tu wopisane: http://trac.openlayers.org/wiki/SettingZoomLevels",

    'commitSuccess': "WFS-Transakcija: WUSPÃÂÃÂÃÂÃÂ NA ${response}",

    'commitFailed': "WFS-Transakcija: NJEPORADÃÂÃÂ¹ENA ${response}",

    'googleWarning': "WorÃÂÃÂ¡ta Google njemÃÂÃÂ³ÃÂÃÂ¾eÃÂÃÂ¡e so korektnje zaÃÂÃÂitaÃÂÃÂ.\x3cbr\x3e\x3cbr\x3eZo by tutu zdÃÂÃÂºÃÂÃÂlenku wotbyÃÂÃÂ, wubjer nowy BaseLayer z wubÃÂÃÂra worÃÂÃÂ¡tow horjeka naprawo.\x3cbr\x3e\x3cbr\x3eNajskerje so to stawa, dokelÃÂÃÂ¾ skript biblioteki Google Maps pak njebu zapÃÂÃÂijaty pak njewobsahuje korektny kluÃÂÃÂ API za twoje sydÃÂÃÂo.\x3cbr\x3e\x3cbr\x3eWuwiwarjo: Za pomoc ke korektnemu fungowanju worÃÂÃÂ¡tow\n\x3ca href=\'http://trac.openlayers.org/wiki/Google\' target=\'_blank\'\x3etu kliknyÃÂÃÂ\x3c/a\x3e",

    'getLayerWarning': "WorÃÂÃÂ¡ta ${layerType} njemÃÂÃÂ³ÃÂÃÂ¾eÃÂÃÂ¡e so korektnje zaÃÂÃÂitaÃÂÃÂ.\x3cbr\x3e\x3cbr\x3eZo by tutu zdÃÂÃÂºÃÂÃÂlenku wotbyÃÂÃÂ, wubjer nowy BaseLayer z wubÃÂÃÂra worÃÂÃÂ¡tow horjeka naprawo.\x3cbr\x3e\x3cbr\x3eNajskerje so to stawa, dokelÃÂÃÂ¾ skript biblioteki ${layerLib} njebu korektnje zapÃÂÃÂijaty.\x3cbr\x3e\x3cbr\x3eWuwiwarjo: Za pomoc ke korektnemu fungowanju worÃÂÃÂ¡tow\n\x3ca href=\'http://trac.openlayers.org/wiki/${layerLib}\' target=\'_blank\'\x3etu kliknyÃÂÃÂ\x3c/a\x3e",

    'Scale = 1 : ${scaleDenom}': "MÃÂÃÂritko = 1 : ${scaleDenom}",

    'W': "Z",

    'E': "W",

    'N': "S",

    'S': "J",

    'reprojectDeprecated': "WuÃÂÃÂ¾iwaÃÂÃÂ¡ opciju \"reproject\" woÃÂÃÂÃÂÃÂ¡ty ${layerName}. Tuta opcija je zestarjena: jeje wuÃÂÃÂ¾iwanje bÃÂÃÂ myslene, zo by zwobraznjenje datow nad komercielnymi bazowymi kartami podpÃÂÃÂraÃÂÃÂo, ale funkcionalnosÃÂÃÂ mÃÂÃÂÃÂÃÂa so nÃÂÃÂtko z pomocu Sperical Mercator docpÃÂÃÂÃÂÃÂ. DalÃÂÃÂ¡e informacije steja na http://trac.openlayers.org/wiki/SphericalMercator k dispoziciji.",

    'methodDeprecated': "Tuta metoda je so njeschwaliÃÂÃÂa a budÃÂÃÂºe so w 3.0 wotstronjeÃÂÃÂ. ProÃÂÃÂ¡u wuÃÂÃÂ¾ij ${newMethod} mÃÂÃÂsto toho."

});
