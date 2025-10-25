var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.228000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Pattambi_1 = new ol.format.GeoJSON();
var features_Pattambi_1 = format_Pattambi_1.readFeatures(json_Pattambi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pattambi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pattambi_1.addFeatures(features_Pattambi_1);
var lyr_Pattambi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pattambi_1, 
                style: style_Pattambi_1,
                popuplayertitle: 'Pattambi',
                interactive: true,
                title: '<img src="styles/legend/Pattambi_1.png" /> Pattambi'
            });
var format_newlines_2 = new ol.format.GeoJSON();
var features_newlines_2 = format_newlines_2.readFeatures(json_newlines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_newlines_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_newlines_2.addFeatures(features_newlines_2);
var lyr_newlines_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_newlines_2, 
                style: style_newlines_2,
                popuplayertitle: 'new lines',
                interactive: true,
                title: '<img src="styles/legend/newlines_2.png" /> new lines'
            });
var format_points_3 = new ol.format.GeoJSON();
var features_points_3 = format_points_3.readFeatures(json_points_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_points_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_points_3.addFeatures(features_points_3);
var lyr_points_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_points_3, 
                style: style_points_3,
                popuplayertitle: 'points',
                interactive: true,
    title: 'points<br />\
    <img src="styles/legend/points_3_0.png" /> Akshaya centre<br />\
    <img src="styles/legend/points_3_1.png" /> Anganavadi<br />\
    <img src="styles/legend/points_3_2.png" /> hotel<br />\
    <img src="styles/legend/points_3_3.png" /> Library<br />\
    <img src="styles/legend/points_3_4.png" /> Reshan Shop<br />\
    <img src="styles/legend/points_3_5.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Pattambi_1.setVisible(true);lyr_newlines_2.setVisible(true);lyr_points_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Pattambi_1,lyr_newlines_2,lyr_points_3];
lyr_Pattambi_1.set('fieldAliases', {'boundary': 'boundary', 'name': 'name', 'name:ml': 'name:ml', 'political_division': 'political_division', 'type': 'type', 'wikidata': 'wikidata', 'wikipedia': 'wikipedia', });
lyr_newlines_2.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_points_3.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', 'code': 'code', });
lyr_Pattambi_1.set('fieldImages', {'boundary': 'TextEdit', 'name': 'TextEdit', 'name:ml': 'TextEdit', 'political_division': 'TextEdit', 'type': 'TextEdit', 'wikidata': 'TextEdit', 'wikipedia': 'TextEdit', });
lyr_newlines_2.set('fieldImages', {'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', });
lyr_points_3.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'barrier': 'TextEdit', 'highway': 'TextEdit', 'ref': 'TextEdit', 'address': 'TextEdit', 'is_in': 'TextEdit', 'place': 'TextEdit', 'man_made': 'TextEdit', 'other_tags': 'TextEdit', 'code': 'TextEdit', });
lyr_Pattambi_1.set('fieldLabels', {'boundary': 'no label', 'name': 'inline label - always visible', 'name:ml': 'no label', 'political_division': 'no label', 'type': 'no label', 'wikidata': 'no label', 'wikipedia': 'no label', });
lyr_newlines_2.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label - always visible', 'highway': 'inline label - always visible', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_points_3.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label - always visible', 'barrier': 'no label', 'highway': 'inline label - always visible', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', 'code': 'no label', });
lyr_points_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});