/* Translators (2009 onwards):
 *  - Grille chompa
 *  - Nikiwaibel
 *  - Umherirrender
 */

/**
 * @requires OpenLayers/Lang.js
 */

/**
 * Namespace: OpenLayers.Lang["de"]
 * Dictionary for Deutsch.  Keys for entries are used in calls to
 *     <OpenLayers.Lang.translate>.  Entry bodies are normal strings or
 *     strings formatted for use with <OpenLayers.String.format> calls.
 */
OpenLayers.Lang["de"] = OpenLayers.Util.applyDefaults({

    'unhandledRequest': "Unbehandelte AnfragerÃÂÃÂ¼ckmeldung ${statusText}",

    'Permalink': "Permalink",

    'Overlays': "Overlays",

    'Base Layer': "Grundkarte",

    'noFID': "Ein Feature, fÃÂÃÂ¼r das keine FID existiert, kann nicht aktualisiert werden.",

    'browserNotSupported': "Ihr Browser unterstÃÂÃÂ¼tzt keine Vektordarstellung. Aktuell unterstÃÂÃÂ¼tzte Renderer:\n${renderers}",

    'minZoomLevelError': "Die \x3ccode\x3eminZoomLevel\x3c/code\x3e-Eigenschaft ist nur fÃÂÃÂ¼r die Verwendung mit \x3ccode\x3eFixedZoomLevels\x3c/code\x3e-untergeordneten Layers vorgesehen. Das dieser \x3ctt\x3ewfs\x3c/tt\x3e-Layer die \x3ccode\x3eminZoomLevel\x3c/code\x3e-Eigenschaft ÃÂÃÂ¼berprÃÂÃÂ¼ft ist ein Relikt der Vergangenheit. Wir kÃÂÃÂ¶nnen diese ÃÂÃÂberprÃÂÃÂ¼fung nicht entfernen, ohne das OL basierende Applikationen nicht mehr funktionieren. Daher markieren wir es als veraltet - die \x3ccode\x3eminZoomLevel\x3c/code\x3e-ÃÂÃÂberprÃÂÃÂ¼fung wird in Version 3.0 entfernt werden. Bitte verwenden Sie stattdessen die Min-/Max-LÃÂÃÂ¶sung, wie sie unter http://trac.openlayers.org/wiki/SettingZoomLevels beschrieben ist.",

    'commitSuccess': "WFS-Transaktion: Erfolgreich ${response}",

    'commitFailed': "WFS-Transaktion: Fehlgeschlagen ${response}",

    'googleWarning': "Der Google-Layer konnte nicht korrekt geladen werden.\x3cbr\x3e\x3cbr\x3eUm diese Meldung nicht mehr zu erhalten, wÃÂÃÂ¤hlen Sie einen anderen Hintergrundlayer aus dem LayerSwitcher in der rechten oberen Ecke.\x3cbr\x3e\x3cbr\x3eSehr wahrscheinlich tritt dieser Fehler auf, weil das Skript der Google-Maps-Bibliothek nicht eingebunden wurde oder keinen gÃÂÃÂ¼ltigen API-SchlÃÂÃÂ¼ssel fÃÂÃÂ¼r Ihre URL enthÃÂÃÂ¤lt.\x3cbr\x3e\x3cbr\x3eEntwickler: Besuche \x3ca href=\'http://trac.openlayers.org/wiki/Google\' target=\'_blank\'\x3edas Wiki\x3c/a\x3e fÃÂÃÂ¼r Hilfe zum korrekten Einbinden des Google-Layers",

    'getLayerWarning': "Der ${layerType}-Layer konnte nicht korrekt geladen werden.\x3cbr\x3e\x3cbr\x3eUm diese Meldung nicht mehr zu erhalten, wÃÂÃÂ¤hlen Sie einen anderen Hintergrundlayer aus dem LayerSwitcher in der rechten oberen Ecke.\x3cbr\x3e\x3cbr\x3eSehr wahrscheinlich tritt dieser Fehler auf, weil das Skript der \'${layerLib}\'-Bibliothek nicht eingebunden wurde.\x3cbr\x3e\x3cbr\x3eEntwickler: Besuche \x3ca href=\'http://trac.openlayers.org/wiki/${layerLib}\' target=\'_blank\'\x3edas Wiki\x3c/a\x3e fÃÂÃÂ¼r Hilfe zum korrekten Einbinden von Layern",

    'Scale = 1 : ${scaleDenom}': "MaÃÂÃÂstab = 1 : ${scaleDenom}",

    'W': "W",

    'E': "O",

    'N': "N",

    'S': "S",

    'reprojectDeprecated': "Sie verwenden die ÃÂ¢ÃÂÃÂReprojectÃÂ¢ÃÂÃÂ-Option des Layers ${layerName}. Diese Option ist veraltet: Sie wurde entwickelt um die Anzeige von Daten auf kommerziellen Basiskarten zu unterstÃÂÃÂ¼tzen, aber diese Funktion sollte jetzt durch UnterstÃÂÃÂ¼tzung der ÃÂ¢ÃÂÃÂSpherical MercatorÃÂ¢ÃÂÃÂ erreicht werden. Weitere Informationen sind unter http://trac.openlayers.org/wiki/SphericalMercator verfÃÂÃÂ¼gbar.",

    'methodDeprecated': "Die Methode ist veraltet und wird in 3.0 entfernt. Bitte verwende stattdessen ${newMethod}."

});
