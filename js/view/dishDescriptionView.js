//For testing purpose only will be removed
// $( "#confirmButton" ).click(function() {
// 	$('#sidebarView').show();
// 	$('#searchbar').hide();
// 	$('#dishDescriptionView').show();
// 	});

	// @TODO add real functionalities
	
	
	
//ExampleViewController Object constructor
var DishDescriptionView = function(container, model ) {
    // Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	
	this.backToSelectDish = container.find("#backToSelectDish");
	this.confirmDishButton = container.find("#confirmDishButton");
	
		
		//console.log(model.lastClickedDishID);
		
	}
	