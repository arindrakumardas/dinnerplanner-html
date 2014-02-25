//ExampleViewController Object constructor
var SidebarViewController = function(view, model ) {
	
	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});
	
	view.minusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	});
	//Set action for confirm button
	 $("#confirmButton").click(function(){
	 	$('#searchbar').hide();
		$('#sidebarView').hide();
		$('#dishDescriptionView').hide();
		$('#selectDishView').hide();
		$('#numGuestsView').show();
		$('#summaryView').show();
	 });
	 
}
