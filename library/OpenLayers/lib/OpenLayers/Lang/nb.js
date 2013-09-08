/**
 * @requires OpenLayers/Lang.js
 */

/**
 * Namespace: OpenLayers.Lang["nb"]
 * Dictionary for norwegian bokmÃÂÃÂ¥l (Norway). Keys for entries are used in calls to
 *     <OpenLayers.Lang.translate>.  Entry bodies are normal strings or
 *     strings formatted for use with <OpenLayers.String.format> calls.
 */
OpenLayers.Lang["nb"] = {

    'unhandledRequest': "Ubehandlet forespÃÂÃÂ¸rsel returnerte ${statusText}",

    'Permalink': "Kobling til denne siden",

    'Overlays': "Kartlag",

    'Base Layer': "Bakgrunnskart",

    'noFID': "Kan ikke oppdatere et feature (et objekt) som ikke har FID.",

    'browserNotSupported':
        "Din nettleser stÃÂÃÂ¸tter ikke vektortegning. Tegnemetodene som stÃÂÃÂ¸ttes er:\n${renderers}",

    // console message
    'minZoomLevelError':
        "Egenskapen minZoomLevel er kun ment til bruk pÃÂÃÂ¥ lag " +
        "basert pÃÂÃÂ¥ FixedZoomLevels. At dette wfs-laget sjekker " +
        "minZoomLevel er en etterlevning fra tidligere versjoner. Det kan dog ikke " +
        "tas bort uten ÃÂÃÂ¥ risikere at OL-baserte applikasjoner " +
        "slutter ÃÂÃÂ¥ virke, sÃÂÃÂ¥ det er merket som foreldet: " +
        "minZoomLevel i sjekken nedenfor vil fjernes i 3.0. " +
        "Vennligst bruk innstillingene for min/maks opplÃÂÃÂ¸sning " +
        "som er beskrevet her: "+
        "http://trac.openlayers.org/wiki/SettingZoomLevels",

    'commitSuccess': "WFS-transaksjon: LYKTES ${response}",

    'commitFailed': "WFS-transaksjon: MISLYKTES ${response}",

    'googleWarning':
        "Google-laget kunne ikke lastes.<br><br>" +
        "Bytt til et annet bakgrunnslag i lagvelgeren i " +
        "ÃÂÃÂ¸vre hÃÂÃÂ¸yre hjÃÂÃÂ¸rne for ÃÂÃÂ¥ slippe denne meldingen.<br><br>" +
        "Sannsynligvis forÃÂÃÂ¥rsakes feilen av at Google Maps-biblioteket " +
        "ikke er riktig inkludert pÃÂÃÂ¥ nettsiden, eller at det ikke er " +
        "angitt riktig API-nÃÂÃÂ¸kkel for nettstedet.<br><br>" +
        "Utviklere: For hjelp til ÃÂÃÂ¥ fÃÂÃÂ¥ dette til ÃÂÃÂ¥ virke se "+
        "<a href='http://trac.openlayers.org/wiki/Google' " +
        "target='_blank'>her</a>.",

    'getLayerWarning':
        "${layerType}-laget kunne ikke lastes.<br><br>" +
        "Bytt til et annet bakgrunnslag i lagvelgeren i " +
        "ÃÂÃÂ¸vre hÃÂÃÂ¸yre hjÃÂÃÂ¸rne for ÃÂÃÂ¥ slippe denne meldingen.<br><br>" +
        "Sannsynligvis forÃÂÃÂ¥rsakes feilen av at " +
        "${layerLib}-biblioteket ikke var riktig inkludert " +
        "pÃÂÃÂ¥ nettsiden.<br><br>" +
        "Utviklere: For hjelp til ÃÂÃÂ¥ fÃÂÃÂ¥ dette til ÃÂÃÂ¥ virke se " +
        "<a href='http://trac.openlayers.org/wiki/${layerLib}' " +
        "target='_blank'>her</a>.",

    'Scale = 1 : ${scaleDenom}': "<strong>Skala</strong> 1 : ${scaleDenom}",

    // console message
    'reprojectDeprecated':
        "Du bruker innstillingen 'reproject' pÃÂÃÂ¥ laget ${layerName}. " +
        "Denne innstillingen er foreldet, den var ment for ÃÂÃÂ¥ stÃÂÃÂ¸tte " +
        "visning av kartdata over kommersielle bakgrunnskart, men det " +
        "bÃÂÃÂ¸r nÃÂÃÂ¥ gjÃÂÃÂ¸res med stÃÂÃÂ¸tten for Spherical Mercator. Mer informasjon " +
        "finnes pÃÂÃÂ¥ http://trac.openlayers.org/wiki/SphericalMercator.",

    // console message
    'methodDeprecated':
        "Denne metoden er markert som foreldet og vil bli fjernet i 3.0. " +
        "Vennligst bruk ${newMethod} i stedet.",

    'end': ''
};

OpenLayers.Lang["no"] = OpenLayers.Lang["nb"];
