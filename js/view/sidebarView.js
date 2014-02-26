var SidebarView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	//this.plusButton = container.find("#plusGuest");
	//this.minusButton = container.find("#minusGuest");
	this.editGuestNumber = container.find("#editGuestNumber");
	this.div = container.find("#sidebarView");
	this.confirmButton = container.find("#confirmButton");
	this.starterItem = container.find("#starterItem");
	this.mainItem = container.find("#mainItem");
	this.dessertItem = container.find("#dessertItem");
	this.totalCost = container.find("#totalCost");

	//Set the inital values of the components
	this.numberOfGuests.html(model.getNumberOfGuests());
//	this.totalPrice.html(model.getTotalMenuPrice());

	
	/*****************************************  
	      Observer implementation    
	*****************************************/
	
	//Register an observer to the model
	model.addObserver(this);
	
	//This function gets called when there is a change at the model
	this.update = function(arg){
		this.numberOfGuests.html(model.getNumberOfGuests());
		this.totalCost.html(model.getTotalMenuPrice());

		//Update the dishes
		this.starterItem.html(model.getSelectedDish('starter'));
		this.mainItem.html(model.getSelectedDish('main dish'));
		this.dessertItem.html(model.getSelectedDish('dessert'));
	}

this.update();
}
 
