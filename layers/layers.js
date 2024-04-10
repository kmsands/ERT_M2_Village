ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:7851").setExtent([501869.939712, 8071240.196547, 502277.004564, 8071869.157653]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Contours15m_1 = new ol.format.GeoJSON();
var features_Contours15m_1 = format_Contours15m_1.readFeatures(json_Contours15m_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_Contours15m_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contours15m_1.addFeatures(features_Contours15m_1);
var lyr_Contours15m_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contours15m_1, 
                style: style_Contours15m_1,
                popuplayertitle: "Contours (15m)",
                interactive: true,
                title: '<img src="styles/legend/Contours15m_1.png" /> Contours (15m)'
            });
var format_BuriedServices_2 = new ol.format.GeoJSON();
var features_BuriedServices_2 = format_BuriedServices_2.readFeatures(json_BuriedServices_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_BuriedServices_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BuriedServices_2.addFeatures(features_BuriedServices_2);
var lyr_BuriedServices_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BuriedServices_2, 
                style: style_BuriedServices_2,
                popuplayertitle: "Buried Services",
                interactive: true,
    title: 'Buried Services<br />\
    <img src="styles/legend/BuriedServices_2_0.png" /> CSM Air 110mm<br />\
    <img src="styles/legend/BuriedServices_2_1.png" /> Cable Trays<br />\
    <img src="styles/legend/BuriedServices_2_2.png" /> CSM Comms 100mm<br />\
    <img src="styles/legend/BuriedServices_2_3.png" /> CSM Elec 100mm<br />\
    <img src="styles/legend/BuriedServices_2_4.png" /> CSM FUEL LINE<br />\
    <img src="styles/legend/BuriedServices_2_5.png" /> Gate<br />\
    <img src="styles/legend/BuriedServices_2_6.png" /> Generator<br />\
    <img src="styles/legend/BuriedServices_2_7.png" /> CSM GRP 1100mm<br />\
    <img src="styles/legend/BuriedServices_2_8.png" /> CSM Irig Sleeve 100<br />\
    <img src="styles/legend/BuriedServices_2_9.png" /> Culverts<br />\
    <img src="styles/legend/BuriedServices_2_10.png" /> Poly Pipe<br />\
    <img src="styles/legend/BuriedServices_2_11.png" /> CSM Sewer 100<br />\
    <img src="styles/legend/BuriedServices_2_12.png" /> SMSB<br />\
    <img src="styles/legend/BuriedServices_2_13.png" /> CSM Structure Building<br />\
    <img src="styles/legend/BuriedServices_2_14.png" /> CSM Water 900<br />\
    <img src="styles/legend/BuriedServices_2_15.png" /> Hydraulic<br />\
    <img src="styles/legend/BuriedServices_2_16.png" /> CSM Structure Concrete<br />\
    <img src="styles/legend/BuriedServices_2_17.png" /> CSM Structure Fence<br />\
    <img src="styles/legend/BuriedServices_2_18.png" /> CSM Water Copper 25<br />\
    <img src="styles/legend/BuriedServices_2_19.png" /> CSM Water Fire 100<br />\
    <img src="styles/legend/BuriedServices_2_20.png" /> CSM Water Fire 160<br />\
    <img src="styles/legend/BuriedServices_2_21.png" /> CSM Water Fire 225<br />\
    <img src="styles/legend/BuriedServices_2_22.png" /> CSM Water Fire 63<br />\
    <img src="styles/legend/BuriedServices_2_23.png" /> CSM Water Pipe 110<br />\
    <img src="styles/legend/BuriedServices_2_24.png" /> CSM Water Pipe 125<br />\
    <img src="styles/legend/BuriedServices_2_25.png" /> CSM Water Pipe 25<br />\
    <img src="styles/legend/BuriedServices_2_26.png" /> CSM Water Pipe 32<br />\
    <img src="styles/legend/BuriedServices_2_27.png" /> CSM Water Pipe 40<br />\
    <img src="styles/legend/BuriedServices_2_28.png" /> CSM Water Pipe 50<br />\
    <img src="styles/legend/BuriedServices_2_29.png" /> CSM Water Pipe 63<br />\
    <img src="styles/legend/BuriedServices_2_30.png" /> CSM Water Pipe 90<br />\
    <img src="styles/legend/BuriedServices_2_31.png" /> CSM Water Pit<br />\
    <img src="styles/legend/BuriedServices_2_32.png" /> CSM Water Process 140<br />\
    <img src="styles/legend/BuriedServices_2_33.png" /> CSM Water Process 160<br />\
    <img src="styles/legend/BuriedServices_2_34.png" /> CSM Water Process 63<br />\
    <img src="styles/legend/BuriedServices_2_35.png" /> CSM Water Process 90<br />\
    <img src="styles/legend/BuriedServices_2_36.png" /> CSM Water Retic 63<br />\
    <img src="styles/legend/BuriedServices_2_37.png" /> CSM Water Stop Valve<br />\
    <img src="styles/legend/BuriedServices_2_38.png" /> CSM Water Tank<br />\
    <img src="styles/legend/BuriedServices_2_39.png" /> CSM Water Waste 63<br />\
    <img src="styles/legend/BuriedServices_2_40.png" /> CSM Water Waste 90<br />\
    <img src="styles/legend/BuriedServices_2_41.png" /> CSM Water Waste oily 63<br />\
    <img src="styles/legend/BuriedServices_2_42.png" /> CSM Water Waste oily 90<br />\
    <img src="styles/legend/BuriedServices_2_43.png" /> CSM Sewer 150<br />\
    <img src="styles/legend/BuriedServices_2_44.png" /> CSM Sewer 225<br />\
    <img src="styles/legend/BuriedServices_2_45.png" /> CSM Sewer 63<br />\
    <img src="styles/legend/BuriedServices_2_46.png" /> CSM Sewer Control box<br />\
    <img src="styles/legend/BuriedServices_2_47.png" /> CSM Sewer Inspection Opening<br />\
    <img src="styles/legend/BuriedServices_2_48.png" /> CSM Sewer Pit<br />\
    <img src="styles/legend/BuriedServices_2_49.png" /> CSM Sewer rising main 100<br />\
    <img src="styles/legend/BuriedServices_2_50.png" /> CSM Sewer rising main 63<br />\
    <img src="styles/legend/BuriedServices_2_51.png" /> CSM Irig Sleeve 150<br />\
    <img src="styles/legend/BuriedServices_2_52.png" /> CSM Irig Sleeve 300<br />\
    <img src="styles/legend/BuriedServices_2_53.png" /> CSM Irig Sleeve 400<br />\
    <img src="styles/legend/BuriedServices_2_54.png" /> CSM Irig Sleeve 50<br />\
    <img src="styles/legend/BuriedServices_2_55.png" /> CSM GRP 600mm<br />\
    <img src="styles/legend/BuriedServices_2_56.png" /> CSM GRP T PIECE<br />\
    <img src="styles/legend/BuriedServices_2_57.png" /> CSM FUEL TANK<br />\
    <img src="styles/legend/BuriedServices_2_58.png" /> CSM Elec 150mm<br />\
    <img src="styles/legend/BuriedServices_2_59.png" /> CSM Elec 32mm<br />\
    <img src="styles/legend/BuriedServices_2_60.png" /> CSM Elec 50mm<br />\
    <img src="styles/legend/BuriedServices_2_61.png" /> CSM Elec 63mm<br />\
    <img src="styles/legend/BuriedServices_2_62.png" /> CSM Elec 80mm<br />\
    <img src="styles/legend/BuriedServices_2_63.png" /> CSM Elec cable 25mm<br />\
    <img src="styles/legend/BuriedServices_2_64.png" /> CSM Elec cable 25mm2<br />\
    <img src="styles/legend/BuriedServices_2_65.png" /> CSM Elec cable 35mm2<br />\
    <img src="styles/legend/BuriedServices_2_66.png" /> CSM Elec cable 50mm2<br />\
    <img src="styles/legend/BuriedServices_2_67.png" /> CSM Elec cable 6mm2<br />\
    <img src="styles/legend/BuriedServices_2_68.png" /> CSM Elec cable 75mm<br />\
    <img src="styles/legend/BuriedServices_2_69.png" /> CSM Elec conduit unknown<br />\
    <img src="styles/legend/BuriedServices_2_70.png" /> CSM Elec Earth pit<br />\
    <img src="styles/legend/BuriedServices_2_71.png" /> CSM Elec Earthwire<br />\
    <img src="styles/legend/BuriedServices_2_72.png" /> CSM Elec Light Pole<br />\
    <img src="styles/legend/BuriedServices_2_73.png" /> CSM Elec Lightning Mast<br />\
    <img src="styles/legend/BuriedServices_2_74.png" /> CSM Elec Pillar<br />\
    <img src="styles/legend/BuriedServices_2_75.png" /> CSM Elec Pit<br />\
    <img src="styles/legend/BuriedServices_2_76.png" /> CSM Elec switch board<br />\
    <img src="styles/legend/BuriedServices_2_77.png" /> CSM Comms 50mm<br />\
    <img src="styles/legend/BuriedServices_2_78.png" /> CSM Comms Fibre<br />\
    <img src="styles/legend/BuriedServices_2_79.png" /> CSM Comms pit<br />\
    <img src="styles/legend/BuriedServices_2_80.png" /> CSM Air 63mm<br />'
        });
var format_VillageAreas_3 = new ol.format.GeoJSON();
var features_VillageAreas_3 = format_VillageAreas_3.readFeatures(json_VillageAreas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_VillageAreas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillageAreas_3.addFeatures(features_VillageAreas_3);
var lyr_VillageAreas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillageAreas_3, 
                style: style_VillageAreas_3,
                popuplayertitle: "Village Areas",
                interactive: true,
    title: 'Village Areas<br />\
    <img src="styles/legend/VillageAreas_3_0.png" /> A Block<br />\
    <img src="styles/legend/VillageAreas_3_1.png" /> B Block<br />\
    <img src="styles/legend/VillageAreas_3_2.png" /> C Block<br />\
    <img src="styles/legend/VillageAreas_3_3.png" /> D Block<br />\
    <img src="styles/legend/VillageAreas_3_4.png" /> Laundry Block<br />'
        });
var format_RoomNumbers_4 = new ol.format.GeoJSON();
var features_RoomNumbers_4 = format_RoomNumbers_4.readFeatures(json_RoomNumbers_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_RoomNumbers_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoomNumbers_4.addFeatures(features_RoomNumbers_4);
var lyr_RoomNumbers_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoomNumbers_4, 
                style: style_RoomNumbers_4,
                popuplayertitle: "Room Numbers",
                interactive: true,
                title: '<img src="styles/legend/RoomNumbers_4.png" /> Room Numbers'
            });
var format_BlockNumbers_5 = new ol.format.GeoJSON();
var features_BlockNumbers_5 = format_BlockNumbers_5.readFeatures(json_BlockNumbers_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_BlockNumbers_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlockNumbers_5.addFeatures(features_BlockNumbers_5);
var lyr_BlockNumbers_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlockNumbers_5, 
                style: style_BlockNumbers_5,
                popuplayertitle: "Block Numbers",
                interactive: true,
                title: '<img src="styles/legend/BlockNumbers_5.png" /> Block Numbers'
            });
var format_VillageLocations_6 = new ol.format.GeoJSON();
var features_VillageLocations_6 = format_VillageLocations_6.readFeatures(json_VillageLocations_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_VillageLocations_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillageLocations_6.addFeatures(features_VillageLocations_6);
var lyr_VillageLocations_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillageLocations_6, 
                style: style_VillageLocations_6,
                popuplayertitle: "Village Locations",
                interactive: true,
                title: '<img src="styles/legend/VillageLocations_6.png" /> Village Locations'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Contours15m_1.setVisible(true);lyr_BuriedServices_2.setVisible(true);lyr_VillageAreas_3.setVisible(true);lyr_RoomNumbers_4.setVisible(true);lyr_BlockNumbers_5.setVisible(true);lyr_VillageLocations_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Contours15m_1,lyr_BuriedServices_2,lyr_VillageAreas_3,lyr_RoomNumbers_4,lyr_BlockNumbers_5,lyr_VillageLocations_6];
lyr_Contours15m_1.set('fieldAliases', {'fid': 'fid', 'zvalue': 'zvalue', });
lyr_BuriedServices_2.set('fieldAliases', {'fid': 'fid', 'serviceType': 'serviceType', });
lyr_VillageAreas_3.set('fieldAliases', {'fid': 'fid', 'Block': 'Block', 'alpha_order': 'alpha_order', 'greater_block': 'greater_block', });
lyr_RoomNumbers_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'buildingname': 'buildingname', 'label': 'label', });
lyr_BlockNumbers_5.set('fieldAliases', {'fid': 'fid', 'Block': 'Block', 'alpha_order': 'alpha_order', });
lyr_VillageLocations_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'buildingname': 'buildingname', 'label': 'label', });
lyr_Contours15m_1.set('fieldImages', {'fid': 'TextEdit', 'zvalue': 'TextEdit', });
lyr_BuriedServices_2.set('fieldImages', {'fid': 'TextEdit', 'serviceType': 'TextEdit', });
lyr_VillageAreas_3.set('fieldImages', {'fid': 'TextEdit', 'Block': 'TextEdit', 'alpha_order': 'Range', 'greater_block': 'TextEdit', });
lyr_RoomNumbers_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'buildingname': 'TextEdit', 'label': 'TextEdit', });
lyr_BlockNumbers_5.set('fieldImages', {'fid': 'TextEdit', 'Block': 'TextEdit', 'alpha_order': 'Range', });
lyr_VillageLocations_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'buildingname': 'TextEdit', 'label': 'TextEdit', });
lyr_Contours15m_1.set('fieldLabels', {'fid': 'no label', 'zvalue': 'no label', });
lyr_BuriedServices_2.set('fieldLabels', {'fid': 'hidden field', 'serviceType': 'header label - always visible', });
lyr_VillageAreas_3.set('fieldLabels', {'fid': 'hidden field', 'Block': 'hidden field', 'alpha_order': 'hidden field', 'greater_block': 'hidden field', });
lyr_RoomNumbers_4.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'buildingname': 'header label - always visible', 'label': 'hidden field', });
lyr_BlockNumbers_5.set('fieldLabels', {'fid': 'hidden field', 'Block': 'header label - always visible', 'alpha_order': 'hidden field', });
lyr_VillageLocations_6.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'buildingname': 'header label - always visible', 'label': 'hidden field', });
lyr_VillageLocations_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});