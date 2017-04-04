var googleAPIKey = "AIzaSyBotnDBlQ21qy9VAwIr81RpCW21HMSIxHk";

var MapModule = require('ti.map');


(function() {

    $.mapview.addEventListener('click', function (event) {
    	Ti.API.error('Calling Ti.Geolocation.getCurrentPosition');
    	if (Ti.Geolocation.locationServicesEnabled) {
    		Ti.Geolocation.getCurrentPosition(function (event) {
    			Ti.API.error('Ti.Geolocation.getCurrentPosition Callback Success: ' + event.success);

    	    	Ti.UI.createAlertDialog({
    	      		title: 'Geolocation',
    	      		message: JSON.stringify(event.coords),
    	      		ok: 'OK'
    	    	}).show();


    			if (event.error) {
    	            Ti.API.error('Error: ' + event.error);
    	        } else {
    	            Ti.API.info(JSON.stringify(event.coords));
    	        }
    	    });
    	}else{
    		Ti.Geolocation.requestLocationPermissions();
    	}
    });

}());
//
// var rc = MapModule.isGooglePlayServicesAvailable();
// switch (rc) {
//     case MapModule.SUCCESS:
//         Ti.API.debug('Google Play services is installed.');
//         break;
//     case MapModule.SERVICE_MISSING:
//         alert('Google Play services is missing. Please install Google Play services from the Google Play store.');
//         break;
//     case MapModule.SERVICE_VERSION_UPDATE_REQUIRED:
//         alert('Google Play services is out of date. Please update Google Play services.');
//         break;
//     case MapModule.SERVICE_DISABLED:
//         alert('Google Play services is disabled. Please enable Google Play services.');
//         break;
//     case MapModule.SERVICE_INVALID:
//         alert('Google Play services cannot be authenticated. Reinstall Google Play services.');
//         break;
//     default:
//         alert('Unknown error.');
// }
//
// // var win = Ti.UI.createWindow();
// var opera = MapModule.createAnnotation({
//     latitude: -33.8569,
//     longitude: 151.2153,
//     image: 'SydneyOperaHouse.jpg',
//     title: 'Sydney Opera House',
//     subtitle: 'Sydney, New South Wales, Australia'
// });
//
// var bridge = MapModule.createAnnotation({
//     latitude: -33.852222,
//     longitude: 151.210556,
//     pincolor: MapModule.ANNOTATION_AZURE,
//     // Even though we are creating a button, it does not respond to Button events or animates.
//     // Use the Map View's click event and monitor the clicksource property for 'leftPane'.
//     leftView: Ti.UI.createButton({title: 'Detail'}),
//     // For eventing, use the Map View's click event
//     // and monitor the clicksource property for 'rightPane'.
//     rightButton: 'SydneyHarbourBridge.jpg',
//     title: 'Sydney Harbour Bridge',
//     subtitle: 'Port Jackson'
// });
//
// var random = MapModule.createAnnotation({
//     latitude: -33.87365,
//     longitude: 151.20689,
//     pincolor: MapModule.ANNOTATION_VIOLET,
//     // Even though we are creating a label, it does not respond to Label events.
//     // Use the Map View's events instead.
//     customView: Ti.UI.createLabel({
//         text: 'MOVE ME!',
//         opacity: '80%',
//         color: 'red',
//         backgroundColor: 'gray',
//         font: {
//             fontSize: '16dp',
//             fontWeight: 'bold'
//         }
//     }),
//     draggable: true
// });
//
// var mapview = MapModule.createView({
//     mapType: MapModule.NORMAL_TYPE,
//     region: {latitude: -33.87365, longitude: 151.20689, latitudeDelta: 0.1, longitudeDelta: 0.1 },
//     annotations: [bridge,opera], //< add these annotations upon creation
//
// });
//
// // // Add this annotation after creation
// Ti.API.debug("test");
// mapview.addAnnotation(random);
// $.gmapView.add(mapview);
