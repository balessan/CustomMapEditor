/* Translators (2009 onwards):
 *  - Luckas Blade
 *  - Rodrigo Avila
 */

/**
 * @requires OpenLayers/Lang.js
 */

/**
 * Namespace: OpenLayers.Lang["pt-br"]
 * Dictionary for PortuguÃÂÃÂªs do Brasil.  Keys for entries are used in calls to
 *     <OpenLayers.Lang.translate>.  Entry bodies are normal strings or
 *     strings formatted for use with <OpenLayers.String.format> calls.
 */
OpenLayers.Lang["pt-br"] = OpenLayers.Util.applyDefaults({

    'unhandledRequest': "A requisiÃÂÃÂ§ÃÂÃÂ£o retornou um erro nÃÂÃÂ£o tratado: ${statusText}",

    'Permalink': "Link para essa pÃÂÃÂ¡gina",

    'Overlays': "Camadas de SobreposiÃÂÃÂ§ÃÂÃÂ£o",

    'Base Layer': "Camada Base",

    'noFID': "NÃÂÃÂ£o ÃÂÃÂ© possÃÂÃÂ­vel atualizar uma feiÃÂÃÂ§ÃÂÃÂ£o que nÃÂÃÂ£o tenha um FID.",

    'browserNotSupported': "Seu navegador nÃÂÃÂ£o suporta renderizaÃÂÃÂ§ÃÂÃÂ£o de vetores. Os renderizadores suportados atualmente sÃÂÃÂ£o:\n${renderers}",

    'minZoomLevelError': "A propriedade minZoomLevel ÃÂÃÂ© de uso restrito das camadas descendentes de FixedZoomLevels. A verificaÃÂÃÂ§ÃÂÃÂ£o dessa propriedade pelas camadas wfs ÃÂÃÂ© um resÃÂÃÂ­duo do passado. NÃÂÃÂ£o podemos, entretanto nÃÂÃÂ£o ÃÂÃÂ© possÃÂÃÂ­vel removÃÂÃÂª-la sem possÃÂÃÂ­velmente quebrar o funcionamento de aplicaÃÂÃÂ§ÃÂÃÂµes OL que possuem depÃÂÃÂªncia com ela. Portanto estamos tornando seu uso obsoleto -- a verificaÃÂÃÂ§ÃÂÃÂ£o desse atributo serÃÂÃÂ¡ removida na versÃÂÃÂ£o 3.0. Ao invÃÂÃÂ©s, use as opÃÂÃÂ§ÃÂÃÂµes de resoluÃÂÃÂ§ÃÂÃÂ£o min/max como descrito em: http://trac.openlayers.org/wiki/SettingZoomLevels",

    'commitSuccess': "TransaÃÂÃÂ§ÃÂÃÂ£o WFS : SUCESSO ${response}",

    'commitFailed': "TransaÃÂÃÂ§ÃÂÃÂ£o WFS : ERRO ${response}",

    'googleWarning': "NÃÂÃÂ£o foi possÃÂÃÂ­vel carregar a camada Google corretamente.\x3cbr\x3e\x3cbr\x3ePara se livrar dessa mensagem, selecione uma nova Camada Base, na ferramenta de alternaÃÂÃÂ§ÃÂÃÂ£o de camadas localizaÃÂÃÂ§ÃÂÃÂ£o do canto superior direito.\x3cbr\x3e\x3cbr\x3eMuito provavelmente, isso foi causado porque o script da biblioteca do Google Maps nÃÂÃÂ£o foi incluÃÂÃÂ­do, ou porque ele nÃÂÃÂ£o contÃÂÃÂ©m a chave correta da API para o seu site.\x3cbr\x3e\x3cbr\x3eDesenvolvedores: Para obter ajuda em solucionar esse problema \x3ca href=\'http://trac.openlayers.org/wiki/Google\' target=\'_blank\'\x3ecliquem aqui\x3c/a\x3e",

    'getLayerWarning': "NÃÂÃÂ£o foi possÃÂÃÂ­vel carregar a camada ${layerType} corretamente.\x3cbr\x3e\x3cbr\x3ePara se livrar dessa mensagem, selecione uma nova Camada Base, na ferramenta de alternaÃÂÃÂ§ÃÂÃÂ£o de camadas localizaÃÂÃÂ§ÃÂÃÂ£o do canto superior direito.\x3cbr\x3e\x3cbr\x3eMuito provavelmente, isso foi causado porque o script da biblioteca ${layerLib} nÃÂÃÂ£o foi incluÃÂÃÂ­do corretamente.\x3cbr\x3e\x3cbr\x3eDesenvolvedores: Para obter ajuda em solucionar esse problema \x3ca href=\'http://trac.openlayers.org/wiki/${layerLib}\' target=\'_blank\'\x3ecliquem aqui\x3c/a\x3e",

    'Scale = 1 : ${scaleDenom}': "Escala = 1 : ${scaleDenom}",

    'W': "O",

    'E': "L",

    'N': "N",

    'S': "S",

    'reprojectDeprecated': "VocÃÂÃÂª estÃÂÃÂ¡ usando a opÃÂÃÂ§ÃÂÃÂ£o \'reproject\' na camada ${layerName}. Essa opÃÂÃÂ§ÃÂÃÂ£o estÃÂÃÂ¡ obsoleta: seu uso foi projetado para suportar a visualizaÃÂÃÂ§ÃÂÃÂ£o de dados sobre bases de mapas comerciais, entretanto essa funcionalidade deve agora ser alcanÃÂÃÂ§ada usando o suporte ÃÂÃÂ  projeÃÂÃÂ§ÃÂÃÂ£o Mercator. Mais informaÃÂÃÂ§ÃÂÃÂ£o estÃÂÃÂ¡ disponÃÂÃÂ­vel em: http://trac.openlayers.org/wiki/SphericalMercator.",

    'methodDeprecated': "Esse mÃÂÃÂ©todo estÃÂÃÂ¡ obsoleto e serÃÂÃÂ¡ removido na versÃÂÃÂ£o 3.0. Ao invÃÂÃÂ©s, por favor use ${newMethod}."

});
