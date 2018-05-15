var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_TIERRASABUELOS_1 = new ol.format.GeoJSON();
var features_TIERRASABUELOS_1 = format_TIERRASABUELOS_1.readFeatures(json_TIERRASABUELOS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TIERRASABUELOS_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TIERRASABUELOS_1.addFeatures(features_TIERRASABUELOS_1);var lyr_TIERRASABUELOS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TIERRASABUELOS_1, 
                style: style_TIERRASABUELOS_1,
                title: '<img src="styles/legend/TIERRASABUELOS_1.png" /> TIERRAS ABUELOS'
            });

lyr_TIERRASABUELOS_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_TIERRASABUELOS_1];
lyr_TIERRASABUELOS_1.set('fieldAliases', {'MUNICIPIO': 'MUNICIPIO', 'PROVINCIA': 'PROVINCIA', 'FINCA': 'FINCA', 'CATASTRO': 'CATASTRO', 'TITULAR': 'TITULAR', 'AREA (m2)': 'AREA (m2)', });
lyr_TIERRASABUELOS_1.set('fieldImages', {'MUNICIPIO': '', 'PROVINCIA': '', 'FINCA': '', 'CATASTRO': '', 'TITULAR': '', 'AREA (m2)': '', });
lyr_TIERRASABUELOS_1.set('fieldLabels', {'MUNICIPIO': 'inline label', 'PROVINCIA': 'inline label', 'FINCA': 'inline label', 'CATASTRO': 'inline label', 'TITULAR': 'inline label', 'AREA (m2)': 'inline label', });
lyr_TIERRASABUELOS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});