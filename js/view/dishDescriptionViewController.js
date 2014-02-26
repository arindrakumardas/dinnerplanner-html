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
		model.addDishToMenu(view.dish.id);
		if (view.dish.type == 'starter') {
			$('#starterRow').show();
			$('#starterItem').text(view.dish.name);
			$('#starterItemCost').text(model.getDishCost(view.dish));
		}
		if (view.dish.type == 'main dish') {
			$('#mainRow').show();
			$('#mainItem').text(view.dish.name);
			$('#mainItemCost').text(model.getDishCost(view.dish));
		}
		if (view.dish.type == 'dessert') {
			$('#dessertRow').show();
			$('#dessertItem').text(view.dish.name);
			$('#dessertItemCost').text(model.getDishCost(view.dish));
		}
	});
	
}
