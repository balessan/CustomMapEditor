/* Translators (2009 onwards):
 *  - Hamilton Abreu
 *  - Malafaya
 *  - Waldir
 */

/**
 * @requires OpenLayers/Lang.js
 */

/**
 * Namespace: OpenLayers.Lang["pt"]
 * Dictionary for PortuguÃÂÃÂªs.  Keys for entries are used in calls to
 *     <OpenLayers.Lang.translate>.  Entry bodies are normal strings or
 *     strings formatted for use with <OpenLayers.String.format> calls.
 */
OpenLayers.Lang["pt"] = OpenLayers.Util.applyDefaults({

    'unhandledRequest': "Servidor devolveu erro nÃÂÃÂ£o contemplado ${statusText}",

    'Permalink': "LigaÃÂÃÂ§ÃÂÃÂ£o permanente",

    'Overlays': "SobreposiÃÂÃÂ§ÃÂÃÂµes",

    'Base Layer': "Camada Base",

    'noFID': "NÃÂÃÂ£o ÃÂÃÂ© possÃÂÃÂ­vel atualizar um elemento para a qual nÃÂÃÂ£o hÃÂÃÂ¡ FID.",

    'browserNotSupported': "O seu navegador nÃÂÃÂ£o suporta renderizaÃÂÃÂ§ÃÂÃÂ£o vetorial. Actualmente os renderizadores suportados sÃÂÃÂ£o:\n${renderers}",

    'minZoomLevelError': "A propriedade minZoomLevel sÃÂÃÂ³ deve ser usada com as camadas descendentes da FixedZoomLevels. A verificaÃÂÃÂ§ÃÂÃÂ£o da propriedade por esta camada wfs ÃÂÃÂ© uma relÃÂÃÂ­quia do passado. No entanto, nÃÂÃÂ£o podemos removÃÂÃÂª-la sem correr o risco de afectar aplicaÃÂÃÂ§ÃÂÃÂµes OL que dependam dela. Portanto, estamos a tornÃÂÃÂ¡-la obsoleta -- a verificaÃÂÃÂ§ÃÂÃÂ£o minZoomLevel serÃÂÃÂ¡ removida na versÃÂÃÂ£o 3.0. Em vez dela, por favor, use as opÃÂÃÂ§ÃÂÃÂµes de resoluÃÂÃÂ§ÃÂÃÂ£o min/max descritas aqui: http://trac.openlayers.org/wiki/SettingZoomLevels",

    'commitSuccess': "TransacÃÂÃÂ§ÃÂÃÂ£o WFS: SUCESSO ${response}",

    'commitFailed': "TransacÃÂÃÂ§ÃÂÃÂ£o WFS: FALHOU ${response}",

    'googleWarning': "A Camada Google nÃÂÃÂ£o foi correctamente carregada.\x3cbr\x3e\x3cbr\x3ePara deixar de receber esta mensagem, seleccione uma nova Camada-Base no \'\'switcher\'\' de camadas no canto superior direito.\x3cbr\x3e\x3cbr\x3eProvavelmente, isto acontece porque o \'\'script\'\' da biblioteca do Google Maps nÃÂÃÂ£o foi incluÃÂÃÂ­do ou nÃÂÃÂ£o contÃÂÃÂ©m a chave API correcta para o seu sÃÂÃÂ­tio.\x3cbr\x3e\x3cbr\x3eProgramadores: Para ajuda sobre como solucionar o problema \x3ca href=\'http://trac.openlayers.org/wiki/Google\' target=\'_blank\'\x3eclique aqui\x3c/a\x3e .",

    'getLayerWarning': "A camada ${layerType} nÃÂÃÂ£o foi correctamente carregada.\x3cbr\x3e\x3cbr\x3ePara desactivar esta mensagem, seleccione uma nova Camada-Base no \'\'switcher\'\' de camadas no canto superior direito.\x3cbr\x3e\x3cbr\x3eProvavelmente, isto acontece porque o \'\'script\'\' da biblioteca ${layerLib} nÃÂÃÂ£o foi incluÃÂÃÂ­do correctamente.\x3cbr\x3e\x3cbr\x3eProgramadores: Para ajuda sobre como solucionar o problema \x3ca href=\'http://trac.openlayers.org/wiki/${layerLib}\' target=\'_blank\'\x3eclique aqui\x3c/a\x3e .",

    'Scale = 1 : ${scaleDenom}': "Escala = 1 : ${scaleDenom}",

    'W': "O",

    'E': "E",

    'N': "N",

    'S': "S",

    'reprojectDeprecated': "EstÃÂÃÂ¡ usando a opÃÂÃÂ§ÃÂÃÂ£o \'reproject\' na camada ${layerName}. Esta opÃÂÃÂ§ÃÂÃÂ£o ÃÂÃÂ© obsoleta: foi concebida para permitir a apresentaÃÂÃÂ§ÃÂÃÂ£o de dados sobre mapas-base comerciais, mas esta funcionalidade ÃÂÃÂ© agora suportada pelo Mercator EsfÃÂÃÂ©rico. Mais informaÃÂÃÂ§ÃÂÃÂ£o estÃÂÃÂ¡ disponÃÂÃÂ­vel em http://trac.openlayers.org/wiki/SphericalMercator.",

    'methodDeprecated': "Este mÃÂÃÂ©todo foi declarado obsoleto e serÃÂÃÂ¡ removido na versÃÂÃÂ£o 3.0. Por favor, use ${newMethod} em vez disso."

});
