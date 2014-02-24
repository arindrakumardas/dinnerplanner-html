//ExampleView Object constructor
var SummaryView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.starter = container.find("#starter");
	this.main = container.find("#main");
	this.dessert = container.find("dessert");

	this.starterName = container.find("#starterName");
	this.mainName = container.find("#mainName");
	this.dessertName = container.find("dessertName");

	// this.starterName.innerHTML = 'asdf';
	//Creating the components dynamically. Here we create the following HTML content:
	//
	//<div class="row">
	//  Total menu price <span id="totalPrice"></span>
	//</div>
	//
	//and add it to the the exampleView 
	
	//Set the inital values of the components

	//this.menu = model.getFullMenu();
	
	for(var i = 0; i < model.getFullMenu().length; i++) {
		var dish = model.getFullMenu()[i];
		if(dish.type == 'starter') {
			this.starter.src = 'images/toast.jpg';
			this.starterName.html(dish.name);
		}
		if(dish.type == 'main') {
			this.mainName.html(dish.name);
		}
		if(dish.type == 'dessert') {
			this.dessertName.html(dish.name);
		}
	}

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
		// this.starterName.html(model.getSelectedDish('starter'));
		// this.mainName.html(model.getSelectedDish('main').name);
		// this.dessertName.html(model.getSelectedDish('dessert').name);
	}
}