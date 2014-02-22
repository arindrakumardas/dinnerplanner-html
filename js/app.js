$(function() {
	//The global variable so we can access it from other controller and views
	window.stage = "starter";
	window.stage = "main";
	window.stage = "dessert";
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"),model);
	var exampleViewController = new ExampleViewController(exampleView,model);
	// Side Bar controller and view
	var sidebarView = new SidebarView($("#sidebarView"),model);
	var sidebarViewController = new SidebarViewController(sidebarView,model);
	//Select Dish controllers and views
	var selectDishView = new SelectDishView($("#selectDishView"),model);
	var selectDishViewController = new SelectDishViewController(selectDishView,model);
	//Number of Guests view and controller
	var numGuestsView = new NumGuestsView($("#numGuestsView"),model);
	var numGuestsViewController = new NumGuestsViewController(numGuestsView,model);
	//Instructions view and controller
	var instructionsView = new InstructionsView($("#instructionsView"),model);
	var instructionsViewController = new InstructionsViewController(instructionsView,model);
});