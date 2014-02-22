//ExampleViewController Object constructor
var SidebarViewController = function(view, model ) {
	
	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});
	
	view.minusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	});
	view.confirmButton.click(function(){
		$('#selectDishView').hide();
		$('#homeView').hide();
		$('#sidebarView').hide();
		$('#numGuestsView').show();
	});
}
