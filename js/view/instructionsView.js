//Example Object constructor
var InstructionsView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	
	//Creating the components dynamically. Here we create the following HTML content:
	//
	// <div class="row">
	//  Total menu price <span id="totalPrice"></span>
	// </div>
	// 
	//and add it to the the exampleView 
	

	
	//Set the inital values of the components
	
	
	
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
 
