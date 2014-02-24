//Example Object constructor
var InstructionsView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	
	this.starterImg = container.find("#starterImg");
	this.mainImg = container.find("#mainImg");
	this.dessertImg = container.find("#dessertImg");

	this.starterName = container.find("#starterName");
	this.mainName = container.find("#mainName");
	this.dessertName = container.find("#dessertName");

	this.starterIngredients = container.find("#starterIngredients");
	this.mainIngredients = container.find("#mainIngredients");
	this.dessertIngredients = container.find("#dessertIngredients");

	this.starterPrep = container.find("#starterPrep");
	this.mainPrep = container.find("#mainPrep");
	this.dessertPrep = container.find("#dessertPrep");
	
	//Set the inital values of the components
	
	for(var i = 0; i < model.getFullMenu().length; i++) {
		var dish = model.getFullMenu()[i];
		if(dish.type == 'starter') {
			this.starterImg.attr('src', 'images/' + dish.image);
			this.starterName.html(dish.name);
			this.starterPrep.html(dish.description);
			this.starterIngredients.html(model.getPrintableIngredients(dish));
		}
		if(dish.type == 'main dish') {
			this.mainImg.attr('src', 'images/' + dish.image);
			this.mainName.html(dish.name);
			this.mainPrep.html(dish.description);
			this.mainIngredients.html(model.getPrintableIngredients(dish));
		}
		if(dish.type == 'dessert') {
			this.dessertImg.attr('src', 'images/' + dish.image);
			this.dessertName.html(dish.name);
			this.dessertPrep.html(dish.description);
			this.dessertIngredients.html(model.getPrintableIngredients(dish));
		}
	}



	
	/*****************************************  
	      Observer implementation    
	*****************************************/
	
	//Register an observer to the model
	model.addObserver(this);
	
	//This function gets called when there is a change at the model
	//this.update = function(arg){
		//this.numberOfGuests.html(model.getNumberOfGuests());
		
	//}
}
 
