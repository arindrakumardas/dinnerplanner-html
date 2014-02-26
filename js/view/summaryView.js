//ExampleView Object constructor
var SummaryView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.starter = container.find("#starter");
	this.main = container.find("#main");
	this.dessert = container.find("#dessert");

	this.starterName = container.find("#starterName");
	this.mainName = container.find("#mainName");
	this.dessertName = container.find("#dessertName");

	this.starterCost = container.find("#starterCost");
	this.mainCost = container.find("#mainCost");
	this.dessertCost = container.find("#dessertCost");

	this.totalCost = container.find("#totalCost");

	this.printRecipeBtn = container.find("#printRecipeBtn");
	
	//This function gets called when there is a change at the model
	this.update = function(arg){
		for(var i = 0; i < model.getFullMenu().length; i++) {
			var dish = model.getFullMenu()[i];
			if(dish.type == 'starter') {
				this.starter.attr('src', 'images/' + dish.image);
				this.starterName.html(dish.name);
				this.starterCost.html(model.getDishCost(dish) + ' SEK');
			}
			if(dish.type == 'main dish') {
				this.main.attr('src', 'images/' + dish.image);
				this.mainName.html(dish.name);
				this.mainCost.html(model.getDishCost(dish) + ' SEK');
			}
			if(dish.type == 'dessert') {
				this.dessert.attr('src', 'images/' + dish.image);
				this.dessertName.html(dish.name);
				this.dessertCost.html(model.getDishCost(dish) + ' SEK');
			}
		}

	this.totalCost.html(model.getTotalMenuPrice());
	}
	
	/*****************************************  
	      Observer implementation    
	*****************************************/
	
	//Register an observer to the model
	model.addObserver(this);

	//Set the inital values of the components
	this.update(); //Load all data
}