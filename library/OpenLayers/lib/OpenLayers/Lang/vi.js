/* Translators (2009 onwards):
 *  - Minh Nguyen
 */

/**
 * @requires OpenLayers/Lang.js
 */

/**
 * Namespace: OpenLayers.Lang["vi"]
 * Dictionary for TiÃÂ¡ÃÂºÃÂ¿ng ViÃÂ¡ÃÂ»ÃÂt.  Keys for entries are used in calls to
 *     <OpenLayers.Lang.translate>.  Entry bodies are normal strings or
 *     strings formatted for use with <OpenLayers.String.format> calls.
 */
OpenLayers.Lang["vi"] = OpenLayers.Util.applyDefaults({

    'unhandledRequest': "KhÃÂÃÂ´ng xÃÂ¡ÃÂ»ÃÂ­ lÃÂÃÂ½ ÃÂÃÂÃÂÃÂ°ÃÂ¡ÃÂ»ÃÂ£c phÃÂ¡ÃÂºÃÂ£n hÃÂ¡ÃÂ»ÃÂi ${statusText} cho yÃÂÃÂªu cÃÂ¡ÃÂºÃÂ§u",

    'Permalink': "LiÃÂÃÂªn kÃÂ¡ÃÂºÃÂ¿t thÃÂÃÂ°ÃÂ¡ÃÂ»ÃÂng trÃÂ¡ÃÂ»ÃÂ±c",

    'Overlays': "LÃÂ¡ÃÂºÃÂ¥p bÃÂ¡ÃÂºÃÂ£n ÃÂÃÂÃÂ¡ÃÂ»ÃÂ",

    'Base Layer': "LÃÂ¡ÃÂ»ÃÂp nÃÂ¡ÃÂ»ÃÂn",

    'noFID': "KhÃÂÃÂ´ng thÃÂ¡ÃÂ»ÃÂ cÃÂ¡ÃÂºÃÂ­p nhÃÂ¡ÃÂºÃÂ­t tÃÂÃÂ­nh nÃÂÃÂng thiÃÂ¡ÃÂºÃÂ¿u FID.",

    'browserNotSupported': "TrÃÂÃÂ¬nh duyÃÂ¡ÃÂ»ÃÂt cÃÂ¡ÃÂ»ÃÂ§a bÃÂ¡ÃÂºÃÂ¡n khÃÂÃÂ´ng hÃÂ¡ÃÂ»ÃÂ trÃÂ¡ÃÂ»ÃÂ£ chÃÂ¡ÃÂ»ÃÂ©c nÃÂÃÂng vÃÂ¡ÃÂºÃÂ½ bÃÂ¡ÃÂºÃÂ±ng vectÃÂÃÂ¡. HiÃÂ¡ÃÂ»ÃÂn hÃÂ¡ÃÂ»ÃÂ trÃÂ¡ÃÂ»ÃÂ£ cÃÂÃÂ¡c bÃÂ¡ÃÂ»ÃÂ kÃÂ¡ÃÂºÃÂ¿t xuÃÂ¡ÃÂºÃÂ¥t:\n${renderers}",

    'minZoomLevelError': "ChÃÂ¡ÃÂ»ÃÂ nÃÂÃÂªn sÃÂ¡ÃÂ»ÃÂ­ dÃÂ¡ÃÂ»ÃÂ¥ng thuÃÂ¡ÃÂ»ÃÂc tÃÂÃÂ­nh minZoomLevel vÃÂ¡ÃÂ»ÃÂi cÃÂÃÂ¡c lÃÂ¡ÃÂ»ÃÂp FixedZoomLevels-descendent. ViÃÂ¡ÃÂ»ÃÂc lÃÂ¡ÃÂ»ÃÂp wfs nÃÂÃÂ y tÃÂÃÂ¬m cho minZoomLevel lÃÂÃÂ  di tÃÂÃÂ­ch cÃÂÃÂ²n lÃÂ¡ÃÂºÃÂ¡i tÃÂ¡ÃÂ»ÃÂ« xÃÂÃÂ°a. Tuy nhiÃÂÃÂªn, nÃÂ¡ÃÂºÃÂ¿u chÃÂÃÂºng tÃÂÃÂ´i dÃÂ¡ÃÂ»ÃÂi nÃÂÃÂ³ thÃÂÃÂ¬ sÃÂ¡ÃÂºÃÂ½ vÃÂ¡ÃÂ»ÃÂ¡ cÃÂÃÂ¡c chÃÂÃÂ°ÃÂÃÂ¡ng trÃÂÃÂ¬nh OpenLayers mÃÂÃÂ  dÃÂ¡ÃÂ»ÃÂ±a trÃÂÃÂªn nÃÂÃÂ³. BÃÂ¡ÃÂ»ÃÂi vÃÂ¡ÃÂºÃÂ­y chÃÂÃÂºng tÃÂÃÂ´i phÃÂ¡ÃÂºÃÂ£n ÃÂÃÂÃÂ¡ÃÂ»ÃÂi sÃÂ¡ÃÂ»ÃÂ­ dÃÂ¡ÃÂ»ÃÂ¥ng nÃÂÃÂ³\x26nbsp;ÃÂ¢ÃÂÃÂ bÃÂÃÂ°ÃÂ¡ÃÂ»ÃÂc tÃÂÃÂ¬m cho minZoomLevel sÃÂ¡ÃÂºÃÂ½ ÃÂÃÂÃÂÃÂ°ÃÂ¡ÃÂ»ÃÂ£c dÃÂ¡ÃÂ»ÃÂi vÃÂÃÂ o phiÃÂÃÂªn bÃÂ¡ÃÂºÃÂ£n 3.0. Xin sÃÂ¡ÃÂ»ÃÂ­ dÃÂ¡ÃÂ»ÃÂ¥ng thiÃÂ¡ÃÂºÃÂ¿t lÃÂ¡ÃÂºÃÂ­p ÃÂÃÂÃÂ¡ÃÂ»ÃÂ phÃÂÃÂ¢n tÃÂÃÂ­ch tÃÂ¡ÃÂ»ÃÂi thiÃÂ¡ÃÂ»ÃÂu / tÃÂ¡ÃÂ»ÃÂi ÃÂÃÂa thay thÃÂ¡ÃÂºÃÂ¿, theo hÃÂÃÂ°ÃÂ¡ÃÂ»ÃÂng dÃÂ¡ÃÂºÃÂ«n nÃÂÃÂ y: http://trac.openlayers.org/wiki/SettingZoomLevels",

    'commitSuccess': "Giao dÃÂ¡ÃÂ»ÃÂch WFS: THÃÂÃÂNH CÃÂÃÂNG ${response}",

    'commitFailed': "Giao dÃÂ¡ÃÂ»ÃÂch WFS: THÃÂ¡ÃÂºÃÂ¤T BÃÂ¡ÃÂºÃÂ I ${response}",

    'googleWarning': "KhÃÂÃÂ´ng thÃÂ¡ÃÂ»ÃÂ tÃÂ¡ÃÂºÃÂ£i lÃÂ¡ÃÂ»ÃÂp Google ÃÂÃÂÃÂÃÂºng ÃÂÃÂÃÂ¡ÃÂºÃÂ¯n.\x3cbr\x3e\x3cbr\x3eÃÂÃÂÃÂ¡ÃÂ»ÃÂ trÃÂÃÂ¡nh thÃÂÃÂ´ng bÃÂÃÂ¡o nÃÂÃÂ y lÃÂ¡ÃÂºÃÂ§n sau, hÃÂÃÂ£y chÃÂ¡ÃÂ»ÃÂn BaseLayer mÃÂ¡ÃÂ»ÃÂi dÃÂÃÂ¹ng ÃÂÃÂiÃÂ¡ÃÂ»ÃÂu khiÃÂ¡ÃÂ»ÃÂn chÃÂ¡ÃÂ»ÃÂn lÃÂ¡ÃÂ»ÃÂp ÃÂ¡ÃÂ»ÃÂ gÃÂÃÂ³c trÃÂÃÂªn phÃÂ¡ÃÂºÃÂ£i.\x3cbr\x3e\x3cbr\x3eChÃÂ¡ÃÂºÃÂ¯c script thÃÂÃÂ° viÃÂ¡ÃÂ»ÃÂn Google Maps hoÃÂ¡ÃÂºÃÂ·c khÃÂÃÂ´ng ÃÂÃÂÃÂÃÂ°ÃÂ¡ÃÂ»ÃÂ£c bao gÃÂ¡ÃÂ»ÃÂm hoÃÂ¡ÃÂºÃÂ·c khÃÂÃÂ´ng chÃÂ¡ÃÂ»ÃÂ©a khÃÂÃÂ³a API hÃÂ¡ÃÂ»ÃÂ£p vÃÂ¡ÃÂ»ÃÂi website cÃÂ¡ÃÂ»ÃÂ§a bÃÂ¡ÃÂºÃÂ¡n.\x3cbr\x3e\x3cbr\x3e\x3ca href=\'http://trac.openlayers.org/wiki/Google\' target=\'_blank\'\x3eTrÃÂ¡ÃÂ»ÃÂ£ giÃÂÃÂºp vÃÂ¡ÃÂ»ÃÂ tÃÂÃÂ­nh nÃÂÃÂng nÃÂÃÂ y\x3c/a\x3e cho ngÃÂÃÂ°ÃÂ¡ÃÂ»ÃÂi phÃÂÃÂ¡t triÃÂ¡ÃÂ»ÃÂn.",

    'getLayerWarning': "KhÃÂÃÂ´ng thÃÂ¡ÃÂ»ÃÂ tÃÂ¡ÃÂºÃÂ£i lÃÂ¡ÃÂ»ÃÂp ${layerType} ÃÂÃÂÃÂÃÂºng ÃÂÃÂÃÂ¡ÃÂºÃÂ¯n.\x3cbr\x3e\x3cbr\x3eÃÂÃÂÃÂ¡ÃÂ»ÃÂ trÃÂÃÂ¡nh thÃÂÃÂ´ng bÃÂÃÂ¡o nÃÂÃÂ y lÃÂ¡ÃÂºÃÂ§n sau, hÃÂÃÂ£y chÃÂ¡ÃÂ»ÃÂn BaseLayer mÃÂ¡ÃÂ»ÃÂi dÃÂÃÂ¹ng ÃÂÃÂiÃÂ¡ÃÂ»ÃÂu khiÃÂ¡ÃÂ»ÃÂn chÃÂ¡ÃÂ»ÃÂn lÃÂ¡ÃÂ»ÃÂp ÃÂ¡ÃÂ»ÃÂ gÃÂÃÂ³c trÃÂÃÂªn phÃÂ¡ÃÂºÃÂ£i.\x3cbr\x3e\x3cbr\x3eChÃÂ¡ÃÂºÃÂ¯c script thÃÂÃÂ° viÃÂ¡ÃÂ»ÃÂn ${layerLib} khÃÂÃÂ´ng ÃÂÃÂÃÂÃÂ°ÃÂ¡ÃÂ»ÃÂ£c bao gÃÂ¡ÃÂ»ÃÂm ÃÂÃÂÃÂÃÂºng kiÃÂ¡ÃÂ»ÃÂu.\x3cbr\x3e\x3cbr\x3e\x3ca href=\'http://trac.openlayers.org/wiki/${layerLib}\' target=\'_blank\'\x3eTrÃÂ¡ÃÂ»ÃÂ£ giÃÂÃÂºp vÃÂ¡ÃÂ»ÃÂ tÃÂÃÂ­nh nÃÂÃÂng nÃÂÃÂ y\x3c/a\x3e cho ngÃÂÃÂ°ÃÂ¡ÃÂ»ÃÂi phÃÂÃÂ¡t triÃÂ¡ÃÂ»ÃÂn.",

    'Scale = 1 : ${scaleDenom}': "TÃÂ¡ÃÂ»ÃÂ· lÃÂ¡ÃÂ»ÃÂ = 1 : ${scaleDenom}",

    'W': "T",

    'E': "ÃÂÃÂ",

    'N': "B",

    'S': "N",

    'reprojectDeprecated': "BÃÂ¡ÃÂºÃÂ¡n ÃÂÃÂang ÃÂÃÂ¡p dÃÂ¡ÃÂ»ÃÂ¥ng chÃÂ¡ÃÂºÃÂ¿ ÃÂÃÂÃÂ¡ÃÂ»ÃÂ ÃÂ¢ÃÂÃÂreprojectÃÂ¢ÃÂÃÂ vÃÂÃÂ o lÃÂ¡ÃÂ»ÃÂp ${layerName}. ChÃÂ¡ÃÂºÃÂ¿ ÃÂÃÂÃÂ¡ÃÂ»ÃÂ nÃÂÃÂ y ÃÂÃÂÃÂÃÂ£ bÃÂ¡ÃÂ»ÃÂ phÃÂ¡ÃÂºÃÂ£n ÃÂÃÂÃÂ¡ÃÂ»ÃÂi: nÃÂÃÂ³ cÃÂÃÂ³ mÃÂ¡ÃÂ»ÃÂ¥c ÃÂÃÂÃÂÃÂ­ch hÃÂ¡ÃÂ»ÃÂ trÃÂ¡ÃÂ»ÃÂ£ lÃÂ¡ÃÂºÃÂ¥p dÃÂ¡ÃÂ»ÃÂ¯ liÃÂ¡ÃÂ»ÃÂu trÃÂÃÂªn cÃÂÃÂ¡c nÃÂ¡ÃÂ»ÃÂn bÃÂ¡ÃÂºÃÂ£n ÃÂÃÂÃÂ¡ÃÂ»ÃÂ thÃÂÃÂ°ÃÂÃÂ¡ng mÃÂ¡ÃÂºÃÂ¡i; nÃÂÃÂªn thÃÂ¡ÃÂ»ÃÂ±c hiÃÂ¡ÃÂ»ÃÂn hiÃÂ¡ÃÂ»ÃÂu ÃÂ¡ÃÂ»ÃÂ©ng ÃÂÃÂÃÂÃÂ³ dÃÂÃÂ¹ng tÃÂÃÂ­nh nÃÂÃÂng Mercator HÃÂÃÂ¬nh cÃÂ¡ÃÂºÃÂ§u. CÃÂÃÂ³ sÃÂ¡ÃÂºÃÂµn thÃÂÃÂªm chi tiÃÂ¡ÃÂºÃÂ¿t tÃÂ¡ÃÂºÃÂ¡i http://trac.openlayers.org/wiki/SphericalMercator .",

    'methodDeprecated': "PhÃÂÃÂ°ÃÂÃÂ¡ng thÃÂ¡ÃÂ»ÃÂ©c nÃÂÃÂ y ÃÂÃÂÃÂÃÂ£ bÃÂ¡ÃÂ»ÃÂ phÃÂ¡ÃÂºÃÂ£n ÃÂÃÂÃÂ¡ÃÂ»ÃÂi vÃÂÃÂ  sÃÂ¡ÃÂºÃÂ½ bÃÂ¡ÃÂ»ÃÂ dÃÂ¡ÃÂ»ÃÂi vÃÂÃÂ o phiÃÂÃÂªn bÃÂ¡ÃÂºÃÂ£n 3.0. Xin hÃÂÃÂ£y sÃÂ¡ÃÂ»ÃÂ­ dÃÂ¡ÃÂ»ÃÂ¥ng ${newMethod} thay thÃÂ¡ÃÂºÃÂ¿."

});
