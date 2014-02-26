var DishDescriptionViewController = function(view, model) {
	
	view.backToSelectDish.click(function(){
		$('#dishDescriptionView').hide();
		$('#selectDishView').show();
		$('#searchbar').show();
	});
	
	view.confirmDishButton.click(function(){
		$('#dishDescriptionView').hide();
		$('#selectDishView').show();
		$('#searchbar').show();
	});
	
}
