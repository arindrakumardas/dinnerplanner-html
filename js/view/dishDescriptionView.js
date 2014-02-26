//ExampleViewController Object constructor
var DishDescriptionView = function(container, model) {
    // Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	
	this.backToSelectDish = container.find("#backToSelectDish");
	this.confirmDishButton = container.find("#confirmDishButton");
	
	this.dishName = container.find("#dishName");
	this.dishImg = container.find("#dishImg");
	this.dishPrep = container.find("#dishPrep");
	
	model.addObserver(this);

	this.update = function() {
		this.dish = model.getDish(model.getLastClickedDishId());
		this.dishName.html(this.dish.name);
		// this.dishImg.attr('src', 'images/' + dish.image);
		// this.dishPrep.html(view.dish.description);
	}
	this.update(); //Set initial values
		
	}
	