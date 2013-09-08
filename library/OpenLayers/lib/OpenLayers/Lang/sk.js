/* Translators (2009 onwards):
 *  - Helix84
 */

/**
 * @requires OpenLayers/Lang.js
 */

/**
 * Namespace: OpenLayers.Lang["sk"]
 * Dictionary for SlovenÃÂÃÂina.  Keys for entries are used in calls to
 *     <OpenLayers.Lang.translate>.  Entry bodies are normal strings or
 *     strings formatted for use with <OpenLayers.String.format> calls.
 */
OpenLayers.Lang["sk"] = OpenLayers.Util.applyDefaults({

    'unhandledRequest': "NeobslÃÂÃÂºÃÂÃÂ¾enÃÂÃÂ© poÃÂÃÂ¾iadavky vracajÃÂÃÂº ${statusText}",

    'Permalink': "TrvalÃÂÃÂ½ odkaz",

    'Overlays': "Prekrytia",

    'Base Layer': "ZÃÂÃÂ¡kladnÃÂÃÂ¡ vrstva",

    'noFID': "Nie je moÃÂÃÂ¾nÃÂÃÂ© aktualizovaÃÂÃÂ¥ vlastnosÃÂÃÂ¥, pre ktorÃÂÃÂº neexistuje FID.",

    'browserNotSupported': "VÃÂÃÂ¡ÃÂÃÂ¡ prehliadaÃÂÃÂ nepodporuje vykresÃÂÃÂ¾ovanie vektorov. MomentÃÂÃÂ¡lne podporovanÃÂÃÂ© vykresÃÂÃÂ¾ovaÃÂÃÂe sÃÂÃÂº:\n${renderers}",

    'minZoomLevelError': "VlastnosÃÂÃÂ¥ minZoomLevel je urÃÂÃÂenÃÂÃÂ½ iba na pouÃÂÃÂ¾itie s vrstvami odvodenÃÂÃÂ½mi od FixedZoomLevels. To, ÃÂÃÂ¾e tÃÂÃÂ¡to wfs vrstva kontroluje minZoomLevel je pozostatok z minulosti. NemÃÂÃÂ´ÃÂÃÂ¾eme ho vÃÂÃÂ¡ak odstrÃÂÃÂ¡niÃÂÃÂ¥, aby sme sa vyhli moÃÂÃÂ¾nÃÂÃÂ©mu poruÃÂÃÂ¡eniu aplikÃÂÃÂ¡ciÃÂÃÂ­ zaloÃÂÃÂ¾enÃÂÃÂ½ch na Open Layers, ktorÃÂÃÂ© na tomto mÃÂÃÂ´ÃÂÃÂ¾e zÃÂÃÂ¡visieÃÂÃÂ¥. Preto ho oznaÃÂÃÂujeme ako zavrhovanÃÂÃÂ½ - dolu uvedenÃÂÃÂ¡ kontrola minZoomLevel bude odstrÃÂÃÂ¡nenÃÂÃÂ¡ vo verzii 3.0. PouÃÂÃÂ¾ite prosÃÂÃÂ­m namiesto toho kontrolu min./max. rozlÃÂÃÂ­ÃÂÃÂ¡enia podÃÂÃÂ¾a tu uvedenÃÂÃÂ©ho popisu: http://trac.openlayers.org/wiki/SettingZoomLevels",

    'commitSuccess': "Transakcia WFS: ÃÂÃÂSPEÃÂÃÂ NÃÂÃÂ ${response}",

    'commitFailed': "Transakcia WFS: ZLYHALA ${response}",

    'googleWarning': "Vrstvu Google nebolo moÃÂÃÂ¾nÃÂÃÂ© sprÃÂÃÂ¡vne naÃÂÃÂÃÂÃÂ­taÃÂÃÂ¥.\x3cbr\x3e\x3cbr\x3eAby ste sa tejto sprÃÂÃÂ¡vy zbavili vyberte novÃÂÃÂº BaseLayer v prepÃÂÃÂ­naÃÂÃÂi vrstiev v pravom hornom rohu.\x3cbr\x3e\x3cbr\x3eToto sa stalo pravdepodobne preto, ÃÂÃÂ¾e skript kniÃÂÃÂ¾nice Google Maps buÃÂÃÂ nebol naÃÂÃÂÃÂÃÂ­tanÃÂÃÂ½ alebo neobsahuje sprÃÂÃÂ¡vny kÃÂÃÂ¾ÃÂÃÂºÃÂÃÂ API pre vaÃÂÃÂ¡u lokalitu.\x3cbr\x3e\x3cbr\x3eVÃÂÃÂ½vojÃÂÃÂ¡ri: Tu mÃÂÃÂ´ÃÂÃÂ¾ete zÃÂÃÂ­skaÃÂÃÂ¥ \x3ca href=\'http://trac.openlayers.org/wiki/Google\' target=\'_blank\'\x3epomoc so sfunkÃÂÃÂnenÃÂÃÂ­m\x3c/a\x3e",

    'getLayerWarning': "Vrstvu ${layerType} nebolo moÃÂÃÂ¾nÃÂÃÂ© sprÃÂÃÂ¡vne naÃÂÃÂÃÂÃÂ­taÃÂÃÂ¥.\x3cbr\x3e\x3cbr\x3eAby ste sa tejto sprÃÂÃÂ¡vy zbavili vyberte novÃÂÃÂº BaseLayer v prepÃÂÃÂ­naÃÂÃÂi vrstiev v pravom hornom rohu.\x3cbr\x3e\x3cbr\x3eToto sa stalo pravdepodobne preto, ÃÂÃÂ¾e skript kniÃÂÃÂ¾nice ${layerType} buÃÂÃÂ nebol naÃÂÃÂÃÂÃÂ­tanÃÂÃÂ½ alebo neobsahuje sprÃÂÃÂ¡vny kÃÂÃÂ¾ÃÂÃÂºÃÂÃÂ API pre vaÃÂÃÂ¡u lokalitu.\x3cbr\x3e\x3cbr\x3eVÃÂÃÂ½vojÃÂÃÂ¡ri: Tu mÃÂÃÂ´ÃÂÃÂ¾ete zÃÂÃÂ­skaÃÂÃÂ¥ \x3ca href=\'http://trac.openlayers.org/wiki/${layerType}\' target=\'_blank\'\x3epomoc so sfunkÃÂÃÂnenÃÂÃÂ­m\x3c/a\x3e",

    'Scale = 1 : ${scaleDenom}': "Mierka = 1 : ${scaleDenom}",

    'reprojectDeprecated': "PouÃÂÃÂ¾ÃÂÃÂ­vate voÃÂÃÂ¾by ÃÂ¢ÃÂÃÂreprojectÃÂ¢ÃÂÃÂ vrstvy ${layerType}. TÃÂÃÂ¡to voÃÂÃÂ¾ba je zzavrhovanÃÂÃÂ¡: jej pouÃÂÃÂ¾itie bolo navrhnutÃÂÃÂ© na podporu zobrazovania ÃÂÃÂºdajov nad komerÃÂÃÂnÃÂÃÂ½mi zÃÂÃÂ¡kladovÃÂÃÂ½mi mapami, ale tÃÂÃÂºto funkcionalitu je teraz moÃÂÃÂ¾nÃÂÃÂ© dosiahnuÃÂÃÂ¥ pomocou Spherical Mercator. ÃÂÃÂalÃÂÃÂ¡ie informÃÂÃÂ¡cie zÃÂÃÂ­skate na strÃÂÃÂ¡nke http://trac.openlayers.org/wiki/SphericalMercator.",

    'methodDeprecated': "TÃÂÃÂ¡to metÃÂÃÂ³da je zavrhovanÃÂÃÂ¡ a bude odstrÃÂÃÂ¡nenÃÂÃÂ¡ vo verzii 3.0. PouÃÂÃÂ¾ite prosÃÂÃÂ­m namiesto nej metÃÂÃÂ³du ${newMethod}."
});
