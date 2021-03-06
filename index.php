<?php include('./header.php'); ?>

<script src="<?php echo $include_path; ?>library/OpenLayers/lib/OpenLayers.js"></script>
<script src="<?php echo $include_path; ?>library/OpenLayers/lib/Firebug/firebug.js"></script>

<style>
	img 
	{ 
		max-width:none; 
	}

	#map {
		margin: auto;
		width:  500px;
		height: 500px;
		border: 1px solid gray;
	}
</style>

<script type="text/javascript">
	OpenLayers.Control.Click = OpenLayers.Class(OpenLayers.Control, {
		defaultHandlerOptions: {
			'single': true
		},

		initialize: function(options) {
			this.handlerOptions = OpenLayers.Util.extend(
				{}, this.defaultHandlerOptions
			);
			OpenLayers.Control.prototype.initialize.apply(
				this, arguments
			);
			this.handler = new OpenLayers.Handler.Click(
				this, {
					'click': this.onClick
				}, this.handlerOptions
			);
		},

		onClick: function(evt) {
			var lonlat = this.map.getLonLatFromViewPortPx(evt.xy);
			alert("You clicked near " + lonlat.lat + " N, "
					 + lonlat.lon + " E."
			);
		}	
	});
	
	var map, controls;

	function init(){
		
		map = new OpenLayers.Map('map');
		var layer = new OpenLayers.Layer.OSM("Simple OSM Map");
		
		map.addLayer(layer);
		
		refreshStrategyControl = new OpenLayers.Strategy.Refresh({interval: 5000, force: true});
		
		var pois_layer = new OpenLayers.Layer.Vector("Custom meeting points", {
                    strategies: [refreshStrategyControl, new OpenLayers.Strategy.BBOX({resFactor: 1.1})],
                    protocol: new OpenLayers.Protocol.HTTP({
                        url: "./class/osm_points.txt",
                        format: new OpenLayers.Format.Text()
                    })
                });

		refreshStrategyControl.activate();
		
		map.addLayer(pois_layer);
		
		//Instructions used to add a control click on the map
		//var control;
		//control = new OpenLayers.Control.Click();
		//control.key = "single";
		//map.addControl(control);
		//control.activate();

		map.addControl(new OpenLayers.Control.LayerSwitcher());
		map.addControl(new OpenLayers.Control.MousePosition());		
		
		var targetProj = new OpenLayers.Projection("EPSG:900913");
		var sourceProj = new OpenLayers.Projection("EPSG:4326");
			
		var position = new OpenLayers.LonLat(2.476043,47.689428);
		
		var center = position.transform(
				sourceProj,
				targetProj
		);
		
		map.setCenter(center, 5);
		
		// Interaction; not needed for initial display.
                selectControl = new OpenLayers.Control.SelectFeature(pois_layer);
                map.addControl(selectControl);
                selectControl.activate();
                
		pois_layer.events.on({
                    'featureselected': onFeatureSelect,
                    'featureunselected': onFeatureUnselect
                });
	}
	
	// Needed only for interaction, not for the display.
        function onPopupClose(evt) {
                // 'this' is the popup.
                var feature = this.feature;
                if (feature.layer) { // The feature is not destroyed
                    selectControl.unselect(feature);
                } else { // After "moveend" or "refresh" events on POIs layer all 
                         //     features have been destroyed by the Strategy.BBOX
                    this.destroy();
                }
        }

        function onFeatureSelect(evt) {
                feature = evt.feature;
                
		popup = new OpenLayers.Popup.FramedCloud("featurePopup",
                             feature.geometry.getBounds().getCenterLonLat(),
                              new OpenLayers.Size(100,100),
                              "<h2>" + feature.attributes.title + "</h2><p>" + feature.attributes.description + "</p>",
                             null, true, onPopupClose);
                
		feature.popup = popup;
                popup.feature = feature;
                
		map.addPopup(popup, true);
        }

	function onFeatureUnselect(evt) {
                feature = evt.feature;
                
		if (feature.popup) {
                	popup.feature = null;
	                map.removePopup(feature.popup);
        	        feature.popup.destroy();
                	feature.popup = null;
                }
        }		
</script>

<div class="row-fluid" style="margin-top: 40px;">
	<div class="span6" style="padding-left: 20px;">
		<h1>Work on OSM with OpenLayers</h1>
		<div id="map" class="smallmap"></div>
	</div>

	<div class="span6" style="padding-right: 20px;">
		<h2>Form to add a new point</h2>
		<p>You can use the following form to add points to the custom points layer of the besides map</p>
		<form id="add_point_information">
			<fieldset>
				<legend>Map information</legend>
				<label>Point title</label><input type="textfield" name="title" id="title" /><br>
				<label>Latitude</label><input type="number" name="latitude"id="latitude" /><br>
				<label>Longitude</label><input type="number" name="longitude" id="longitude" /><br>
				<label>Description</label><input name="description" id="description" type="textarea" class="ckeditor" />
				<label>Season</label>
				<input type="submit" id="add_point" class="button"/>
			</fieldset>
		</form>
	</div>
</div>
<script type="text/javascript">
	$(function(){
		init();
		
		$('#add_point').click(function(e) {
			e.preventDefault();
			$form = $(this).closest('form');
			
			$.ajax({
				url: './includes/ajax/save_point.php',
				type: 'POST',
				data: $('#add_point_information').serialize(),
				dataType: 'json',
				success: function(responseJson) {
					$form.before("<p>" + responseJson.message + "</p>");
				},
				error: function() {
					$form.before("<p>There was an error processing your request</p>");
				}
			});	
		});
	});
</script>
<?php include('./footer.php'); ?>
