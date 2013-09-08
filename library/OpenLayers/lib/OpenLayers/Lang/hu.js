/* Translators (2009 onwards):
 *  - City-busz
 *  - Glanthor Reviol
 */

/**
 * @requires OpenLayers/Lang.js
 */

/**
 * Namespace: OpenLayers.Lang["hu"]
 * Dictionary for Magyar.  Keys for entries are used in calls to
 *     <OpenLayers.Lang.translate>.  Entry bodies are normal strings or
 *     strings formatted for use with <OpenLayers.String.format> calls.
 */
OpenLayers.Lang["hu"] = OpenLayers.Util.applyDefaults({

    'unhandledRequest': "Nem kezelt kÃÂÃÂ©rÃÂÃÂ©s visszatÃÂÃÂ©rÃÂÃÂ©se ${statusText}",

    'Permalink': "Permalink",

    'Overlays': "RÃÂÃÂ¡vetÃÂÃÂ­tÃÂÃÂ©sek",

    'Base Layer': "AlaprÃÂÃÂ©teg",

    'noFID': "Nem frissÃÂÃÂ­thetÃÂÃÂ olyan jellemzÃÂÃÂ, amely nem rendelkezik FID-del.",

    'browserNotSupported': "A bÃÂÃÂ¶ngÃÂÃÂ©szÃÂÃÂje nem tÃÂÃÂ¡mogatja a vektoros renderelÃÂÃÂ©st. A jelenleg tÃÂÃÂ¡mogatott renderelÃÂÃÂk:\n${renderers}",

    'minZoomLevelError': "A minZoomLevel tulajdonsÃÂÃÂ¡got csak a kÃÂÃÂ¶vetkezÃÂÃÂvel valÃÂÃÂ³ hasznÃÂÃÂ¡latra szÃÂÃÂ¡ntÃÂÃÂ¡k: FixedZoomLevels-leszÃÂÃÂ¡rmazott fÃÂÃÂ³liÃÂÃÂ¡k. Ez azt jelenti, hogy a minZoomLevel wfs fÃÂÃÂ³lia jelÃÂÃÂ¶lÃÂÃÂnÃÂÃÂ©gyzetei mÃÂÃÂ¡r a mÃÂÃÂºltÃÂÃÂ©. Mi azonban nem tÃÂÃÂ¡volÃÂÃÂ­thatjuk el annak a veszÃÂÃÂ©lye nÃÂÃÂ©lkÃÂÃÂ¼l, hogy az esetlegesen ettÃÂÃÂl fÃÂÃÂ¼ggÃÂÃÂ OL alapÃÂÃÂº alkalmazÃÂÃÂ¡sokat tÃÂÃÂ¶nkretennÃÂÃÂ©nk. EzÃÂÃÂ©rt ezt ÃÂÃÂ©rvÃÂÃÂ©nytelenÃÂÃÂ­tjÃÂÃÂ¼k -- a minZoomLevel az alul levÃÂÃÂ jelÃÂÃÂ¶lÃÂÃÂnÃÂÃÂ©gyzet a 3.0-s verziÃÂÃÂ³bÃÂÃÂ³l el lesz tÃÂÃÂ¡volÃÂÃÂ­tva. KÃÂÃÂ©rjÃÂÃÂ¼k, helyette hasznÃÂÃÂ¡lja a  min/max felbontÃÂÃÂ¡s beÃÂÃÂ¡llÃÂÃÂ­tÃÂÃÂ¡st, amelyrÃÂÃÂl az alÃÂÃÂ¡bbi helyen talÃÂÃÂ¡l leÃÂÃÂ­rÃÂÃÂ¡st: http://trac.openlayers.org/wiki/SettingZoomLevels",

    'commitSuccess': "WFS tranzakciÃÂÃÂ³: SIKERES ${response}",

    'commitFailed': "WFS tranzakciÃÂÃÂ³: SIKERTELEN ${response}",

    'googleWarning': "A Google fÃÂÃÂ³lia betÃÂÃÂ¶ltÃÂÃÂ©se sikertelen.\x3cbr\x3e\x3cbr\x3eAhhoz, hogy ez az ÃÂÃÂ¼zenet eltÃÂÃÂ±njÃÂÃÂ¶n, vÃÂÃÂ¡lasszon egy ÃÂÃÂºj BaseLayer fÃÂÃÂ³liÃÂÃÂ¡t a jobb felsÃÂÃÂ sarokban talÃÂÃÂ¡lhatÃÂÃÂ³ fÃÂÃÂ³liakapcsolÃÂÃÂ³ segÃÂÃÂ­tsÃÂÃÂ©gÃÂÃÂ©vel.\x3cbr\x3e\x3cbr\x3eNagy valÃÂÃÂ³szÃÂÃÂ­nÃÂÃÂ±sÃÂÃÂ©ggel ez azÃÂÃÂ©rt van, mert a Google Maps kÃÂÃÂ¶nyvtÃÂÃÂ¡r parancsfÃÂÃÂ¡jlja nem talÃÂÃÂ¡lhatÃÂÃÂ³, vagy nem tartalmazza az ÃÂÃÂn oldalÃÂÃÂ¡hoz tartozÃÂÃÂ³ megfelelÃÂÃÂ API-kulcsot.\x3cbr\x3e\x3cbr\x3eFejlesztÃÂÃÂknek: A helyes mÃÂÃÂ±kÃÂÃÂ¶dtetÃÂÃÂ©sre vonatkozÃÂÃÂ³ segÃÂÃÂ­tsÃÂÃÂ©g az alÃÂÃÂ¡bbi helyen ÃÂÃÂ©rhetÃÂÃÂ el, \x3ca href=\'http://trac.openlayers.org/wiki/Google\' target=\'_blank\'\x3ekattintson ide\x3c/a\x3e",

    'getLayerWarning': "A(z) ${layerType} fÃÂÃÂ³lia nem tÃÂÃÂ¶ltÃÂÃÂdÃÂÃÂ¶tt be helyesen.\x3cbr\x3e\x3cbr\x3eAhhoz, hogy ez az ÃÂÃÂ¼zenet eltÃÂÃÂ±njÃÂÃÂ¶n, vÃÂÃÂ¡lasszon egy ÃÂÃÂºj BaseLayer fÃÂÃÂ³liÃÂÃÂ¡t a jobb felsÃÂÃÂ sarokban talÃÂÃÂ¡lhatÃÂÃÂ³ fÃÂÃÂ³liakapcsolÃÂÃÂ³ segÃÂÃÂ­tsÃÂÃÂ©gÃÂÃÂ©vel.\x3cbr\x3e\x3cbr\x3eNagy valÃÂÃÂ³szÃÂÃÂ­nÃÂÃÂ±sÃÂÃÂ©ggel ez azÃÂÃÂ©rt van, mert a(z) ${layerLib} kÃÂÃÂ¶nyvtÃÂÃÂ¡r parancsfÃÂÃÂ¡jlja helytelen.\x3cbr\x3e\x3cbr\x3eFejlesztÃÂÃÂknek: A helyes mÃÂÃÂ±kÃÂÃÂ¶dtetÃÂÃÂ©sre vonatkozÃÂÃÂ³ segÃÂÃÂ­tsÃÂÃÂ©g az alÃÂÃÂ¡bbi helyen ÃÂÃÂ©rhetÃÂÃÂ el, \x3ca href=\'http://trac.openlayers.org/wiki/${layerLib}\' target=\'_blank\'\x3ekattintson ide\x3c/a\x3e",

    'Scale = 1 : ${scaleDenom}': "LÃÂÃÂ©ptÃÂÃÂ©k = 1 : ${scaleDenom}",

    'W': "Ny",

    'E': "K",

    'N': "ÃÂÃÂ",

    'S': "D",

    'reprojectDeprecated': "ÃÂÃÂn a \'reproject\' beÃÂÃÂ¡llÃÂÃÂ­tÃÂÃÂ¡st hasznÃÂÃÂ¡lja a(z) ${layerName} fÃÂÃÂ³liÃÂÃÂ¡n. Ez a beÃÂÃÂ¡llÃÂÃÂ­tÃÂÃÂ¡s ÃÂÃÂ©rvÃÂÃÂ©nytelen: hasznÃÂÃÂ¡lata az ÃÂÃÂ¼zleti alaptÃÂÃÂ©rkÃÂÃÂ©pek fÃÂÃÂ¶lÃÂÃÂ¶tti adatok megjelenÃÂÃÂ­tÃÂÃÂ©sÃÂÃÂ©nek tÃÂÃÂ¡mogatÃÂÃÂ¡sÃÂÃÂ¡ra szolgÃÂÃÂ¡lt, de ezt a funkciÃÂÃÂ³ ezentÃÂÃÂºl a GÃÂÃÂ¶mbi Mercator hasznÃÂÃÂ¡latÃÂÃÂ¡val ÃÂÃÂ©rhetÃÂÃÂ el. TovÃÂÃÂ¡bbi informÃÂÃÂ¡ciÃÂÃÂ³ az alÃÂÃÂ¡bbi helyen ÃÂÃÂ©rhetÃÂÃÂ el: http://trac.openlayers.org/wiki/SphericalMercator",

    'methodDeprecated': "Ez a mÃÂÃÂ³dszer ÃÂÃÂ©rvÃÂÃÂ©nytelenÃÂÃÂ­tve lett ÃÂÃÂ©s a 3.0-s verziÃÂÃÂ³bÃÂÃÂ³l el lesz tÃÂÃÂ¡volÃÂÃÂ­tva. HasznÃÂÃÂ¡lja a(z) ${newMethod} mÃÂÃÂ³dszert helyette."

});
