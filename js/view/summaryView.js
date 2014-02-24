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

	// this.starterName.innerHTML = 'asdf';
	//Creating the components dynamically. Here we create the following HTML content:
	//
	//<div class="row">
	//  Total menu price <span id="totalPrice"></span>
	//</div>
	//
	//and add it to the the exampleView 
	
	//Set the inital values of the components
	
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
	// document.getElementById("starter").src="/images/toast.jpg";
	// this.starterName.html('TESTING');

	// this.starterName.html(model.getSelectedDish('starter'));
	// this.mainName.html(model.getSelectedDish('main').name);
	// this.dessertName.html(model.getSelectedDish('dessert').name);
	
	/*****************************************  
	      Observer implementation    
	*****************************************/
	
	//Register an observer to the model
	model.addObserver(this);
	
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
}