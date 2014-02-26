//ExampleViewController Object constructor
var SidebarViewController = function(view, model ) {
	
	// view.editGuestNumber.click(function(){
	// 	model.setNumberOfGuests($(this).val());
	// });
	
	$('#editGuestNumber').bind('input', function() {
    	model.setNumberOfGuests($(this).val());
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
