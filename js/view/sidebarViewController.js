var SidebarViewController = function(view, model ) {
	
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
	 
	 // Set action form remove buttons
	 $("#removeStarterBtn").click(function(){
	 	$('#starterRow').hide();
	 	alert(view.dish);
		 model.removeDishFromMenu(view.dish);
	 });


	 // $("#removeMainBtn").click(function(){
	 // 	$('#mainRow').hide();
	 // });

	 // $("#removeDessertBtn").click(function(){
	 // 	$('#dessertRow').hide();
	 // });

}
