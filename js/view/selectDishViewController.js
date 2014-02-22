var SelectDishViewController = function(view, model ) {
	$('#sidebarView').hide();
	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});
	
	view.minusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	
	
});
	
	 
};