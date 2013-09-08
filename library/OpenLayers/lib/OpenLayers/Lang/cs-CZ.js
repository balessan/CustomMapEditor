/* Translators (2009 onwards):
 *  - Mormegil
 */

/**
 * @requires OpenLayers/Lang.js
 */

/**
 * Namespace: OpenLayers.Lang["cs-CZ"]
 * Dictionary for ÃÂÃÂesky.  Keys for entries are used in calls to
 *     <OpenLayers.Lang.translate>.  Entry bodies are normal strings or
 *     strings formatted for use with <OpenLayers.String.format> calls.
 */
OpenLayers.Lang["cs-CZ"] = OpenLayers.Util.applyDefaults({

    'unhandledRequest': "NezpracovanÃÂÃÂ¡ nÃÂÃÂ¡vratovÃÂÃÂ¡ hodnota ${statusText}",

    'Permalink': "TrvalÃÂÃÂ½ odkaz",

    'Overlays': "PÃÂÃÂekryvnÃÂÃÂ© vrstvy",

    'Base Layer': "PodkladovÃÂÃÂ© vrstvy",

    'noFID': "Nelze aktualizovat prvek, pro kterÃÂÃÂ½ neexistuje FID.",

    'browserNotSupported': "VÃÂÃÂ¡ÃÂÃÂ¡ prohlÃÂÃÂ­ÃÂÃÂ¾eÃÂÃÂ nepodporuje vykreslovÃÂÃÂ¡nÃÂÃÂ­ vektorÃÂÃÂ¯. MomentÃÂÃÂ¡lnÃÂÃÂ podporovanÃÂÃÂ© nÃÂÃÂ¡stroje jsou::\n${renderers}",

    'minZoomLevelError': "Vlastnost minZoomLevel by se mÃÂÃÂla pouÃÂÃÂ¾ÃÂÃÂ­vat pouze s potomky FixedZoomLevels vrstvami. To znamenÃÂÃÂ¡, ÃÂÃÂ¾e vrstva wfs kontroluje, zda-li minZoomLevel nenÃÂÃÂ­ zbytek z minulosti.Nelze to ovÃÂÃÂ¡em vyjmout bez moÃÂÃÂ¾nosti, ÃÂÃÂ¾e bychom rozbili aplikace postavenÃÂÃÂ© na OL, kterÃÂÃÂ© by na tom mohly zÃÂÃÂ¡viset. Proto tuto vlastnost nedoporuÃÂÃÂujeme pouÃÂÃÂ¾ÃÂÃÂ­vat --  kontrola minZoomLevel bude odstranÃÂÃÂna ve verzi 3.0. PouÃÂÃÂ¾ijte prosÃÂÃÂ­m radÃÂÃÂji nastavenÃÂÃÂ­ min/max podle pÃÂÃÂÃÂÃÂ­kaldu popsanÃÂÃÂ©ho na: http://trac.openlayers.org/wiki/SettingZoomLevels",

    'commitSuccess': "WFS Transaction: ÃÂÃÂSPÃÂÃÂCH ${response}",

    'commitFailed': "WFS Transaction: CHYBA ${response}",

    'googleWarning': "NepodaÃÂÃÂilo se sprÃÂÃÂ¡vnÃÂÃÂ naÃÂÃÂÃÂÃÂ­st vrstvu Google.\x3cbr\x3e\x3cbr\x3eAbyste se zbavili tÃÂÃÂ©to zprÃÂÃÂ¡vy, zvolte jinou zÃÂÃÂ¡kladnÃÂÃÂ­ vrstvu v pÃÂÃÂepÃÂÃÂ­naÃÂÃÂi vrstev.\x3cbr\x3e\x3cbr\x3eTo se vÃÂÃÂtÃÂÃÂ¡inou stÃÂÃÂ¡vÃÂÃÂ¡, pokud nebyl naÃÂÃÂten skript, nebo neobsahuje sprÃÂÃÂ¡vnÃÂÃÂ½ klÃÂÃÂ­ÃÂÃÂ pro API pro tuto strÃÂÃÂ¡nku.\x3cbr\x3e\x3cbr\x3eVÃÂÃÂ½vojÃÂÃÂ¡ÃÂÃÂi: Pro pomoc, aby tohle fungovalo , \x3ca href=\'http://trac.openlayers.org/wiki/Google\' target=\'_blank\'\x3ekliknÃÂÃÂte sem\x3c/a\x3e",

    'getLayerWarning': "The ${layerType} Layer was unable to load correctly.\x3cbr\x3e\x3cbr\x3eTo get rid of this message, select a new BaseLayer in the layer switcher in the upper-right corner.\x3cbr\x3e\x3cbr\x3eMost likely, this is because the ${layerLib} library script was either not correctly included.\x3cbr\x3e\x3cbr\x3eDevelopers: For help getting this working correctly, \x3ca href=\'http://trac.openlayers.org/wiki/${layerLib}\' target=\'_blank\'\x3eclick here\x3c/a\x3e",

    'Scale = 1 : ${scaleDenom}': "MÃÂÃÂÃÂÃÂÃÂÃÂ­tko = 1 : ${scaleDenom}",

    'reprojectDeprecated': "PouÃÂÃÂ¾il jste volbu \'reproject\' ve vrstvÃÂÃÂ ${layerName}. Tato volba nenÃÂÃÂ­ doporuÃÂÃÂenÃÂÃÂ¡: byla zde proto, aby bylo moÃÂÃÂ¾no zobrazovat data z okomerÃÂÃÂnÃÂÃÂ­ch serverÃÂÃÂ¯, ale tato funkce je nynÃÂÃÂ­ zajiÃÂÃÂ¡tÃÂÃÂna pomocÃÂÃÂ­ podpory Spherical Mercator. VÃÂÃÂ­ce informacÃÂÃÂ­ naleznete na http://trac.openlayers.org/wiki/SphericalMercator.",

    'methodDeprecated': "Tato metoda je zavrÃÂÃÂ¾enÃÂÃÂ¡ a bude ve verzi 3.0 odstranÃÂÃÂna. ProsÃÂÃÂ­m, pouÃÂÃÂ¾ijte radÃÂÃÂji ${newMethod}."

});
