var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_PROVINCIASESPAA_1 = new ol.format.GeoJSON();
var features_PROVINCIASESPAA_1 = format_PROVINCIASESPAA_1.readFeatures(json_PROVINCIASESPAA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROVINCIASESPAA_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PROVINCIASESPAA_1.addFeatures(features_PROVINCIASESPAA_1);var lyr_PROVINCIASESPAA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PROVINCIASESPAA_1, 
                style: style_PROVINCIASESPAA_1,
                title: '<img src="styles/legend/PROVINCIASESPAA_1.png" /> PROVINCIAS ESPAÑA'
            });var format_MUNICIPIOSCASTILLALAMANCHA_2 = new ol.format.GeoJSON();
var features_MUNICIPIOSCASTILLALAMANCHA_2 = format_MUNICIPIOSCASTILLALAMANCHA_2.readFeatures(json_MUNICIPIOSCASTILLALAMANCHA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNICIPIOSCASTILLALAMANCHA_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MUNICIPIOSCASTILLALAMANCHA_2.addFeatures(features_MUNICIPIOSCASTILLALAMANCHA_2);var lyr_MUNICIPIOSCASTILLALAMANCHA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MUNICIPIOSCASTILLALAMANCHA_2, 
                style: style_MUNICIPIOSCASTILLALAMANCHA_2,
                title: '<img src="styles/legend/MUNICIPIOSCASTILLALAMANCHA_2.png" /> MUNICIPIOS CASTILLA LA MANCHA'
            });var format_TIERRASABUELOS_3 = new ol.format.GeoJSON();
var features_TIERRASABUELOS_3 = format_TIERRASABUELOS_3.readFeatures(json_TIERRASABUELOS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TIERRASABUELOS_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TIERRASABUELOS_3.addFeatures(features_TIERRASABUELOS_3);var lyr_TIERRASABUELOS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TIERRASABUELOS_3, 
                style: style_TIERRASABUELOS_3,
                title: '<img src="styles/legend/TIERRASABUELOS_3.png" /> TIERRAS ABUELOS'
            });

lyr_PROVINCIASESPAA_1.setVisible(true);lyr_MUNICIPIOSCASTILLALAMANCHA_2.setVisible(true);lyr_TIERRASABUELOS_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PROVINCIASESPAA_1,lyr_MUNICIPIOSCASTILLALAMANCHA_2,lyr_TIERRASABUELOS_3];
lyr_PROVINCIASESPAA_1.set('fieldAliases', {'INSPIREID': 'INSPIREID', 'COUNTRY': 'COUNTRY', 'NATLEVEL': 'NATLEVEL', 'NATCODE': 'NATCODE', 'NAMEUNIT': 'NAMEUNIT', 'CODNUT1': 'CODNUT1', 'CODNUT2': 'CODNUT2', 'CODNUT3': 'CODNUT3', });
lyr_MUNICIPIOSCASTILLALAMANCHA_2.set('fieldAliases', {'INSPIREID': 'INSPIREID', 'COUNTRY': 'COUNTRY', 'NATLEVEL': 'NATLEVEL', 'NATCODE': 'NATCODE', 'NAMEUNIT': 'NAMEUNIT', 'CODNUT1': 'CODNUT1', 'CODNUT2': 'CODNUT2', 'CODNUT3': 'CODNUT3', 'TIERRAS_AB': 'TIERRAS_AB', 'NAME_TAB': 'NAME_TAB', });
lyr_TIERRASABUELOS_3.set('fieldAliases', {'MUNICIPIO': 'MUNICIPIO', 'PROVINCIA': 'PROVINCIA', 'FINCA': 'FINCA', 'CATASTRO': 'CATASTRO', 'TITULAR': 'TITULAR', 'AREA (m2)': 'AREA (m2)', });
lyr_PROVINCIASESPAA_1.set('fieldImages', {'INSPIREID': 'TextEdit', 'COUNTRY': 'TextEdit', 'NATLEVEL': 'TextEdit', 'NATCODE': 'TextEdit', 'NAMEUNIT': 'TextEdit', 'CODNUT1': 'TextEdit', 'CODNUT2': 'TextEdit', 'CODNUT3': 'TextEdit', });
lyr_MUNICIPIOSCASTILLALAMANCHA_2.set('fieldImages', {'INSPIREID': 'TextEdit', 'COUNTRY': 'TextEdit', 'NATLEVEL': 'TextEdit', 'NATCODE': 'TextEdit', 'NAMEUNIT': 'TextEdit', 'CODNUT1': 'TextEdit', 'CODNUT2': 'TextEdit', 'CODNUT3': 'TextEdit', 'TIERRAS_AB': 'Range', 'NAME_TAB': 'TextEdit', });
lyr_TIERRASABUELOS_3.set('fieldImages', {'MUNICIPIO': 'TextEdit', 'PROVINCIA': 'TextEdit', 'FINCA': 'TextEdit', 'CATASTRO': 'TextEdit', 'TITULAR': 'TextEdit', 'AREA (m2)': 'TextEdit', });
lyr_PROVINCIASESPAA_1.set('fieldLabels', {'INSPIREID': 'no label', 'COUNTRY': 'no label', 'NATLEVEL': 'no label', 'NATCODE': 'no label', 'NAMEUNIT': 'header label', 'CODNUT1': 'no label', 'CODNUT2': 'no label', 'CODNUT3': 'no label', });
lyr_MUNICIPIOSCASTILLALAMANCHA_2.set('fieldLabels', {'INSPIREID': 'no label', 'COUNTRY': 'no label', 'NATLEVEL': 'no label', 'NATCODE': 'no label', 'NAMEUNIT': 'header label', 'CODNUT1': 'no label', 'CODNUT2': 'no label', 'CODNUT3': 'no label', 'TIERRAS_AB': 'no label', 'NAME_TAB': 'no label', });
lyr_TIERRASABUELOS_3.set('fieldLabels', {'MUNICIPIO': 'inline label', 'PROVINCIA': 'inline label', 'FINCA': 'header label', 'CATASTRO': 'inline label', 'TITULAR': 'inline label', 'AREA (m2)': 'inline label', });
lyr_TIERRASABUELOS_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});