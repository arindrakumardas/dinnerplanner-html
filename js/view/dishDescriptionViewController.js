var DishDescriptionViewController = function(view, model ) {
	
	view.backToSelectDish.click(function(){
		$('#summaryView').hide();
		$('#numGuestsView').hide();
		$('#instructionsView').hide();
		$('#dishDescriptionView').hide();
		$('#selectDishView').show();
		$('#sidebarView').show();
		$('#searchbar').show();
	});
	
	view.confirmDishButton.click(function(){
		$('#summaryView').hide();
		$('#numGuestsView').hide();
		$('#instructionsView').hide();
		$('#dishDescriptionView').hide();
		$('#selectDishView').show();
		$('#sidebarView').show();
		$('#searchbar').show();
	});
	
}
