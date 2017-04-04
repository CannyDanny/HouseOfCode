function openMap() {
	var mapPage = Alloy.createController('gmap').getView();
	mapPage.open({
        modal: true
    });
}



$.index.open();
