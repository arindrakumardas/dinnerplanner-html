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
	
	//Select Dish controllers and views
	var sidebarView = new SidebarView($("#sidebarView"),model);
	var sidebarViewController = new SidebarViewController(sidebarView,model);
	var selectDishView = new SelectDishView($("#selectDishView"),model);
	var selectDishViewController = new SelectDishViewController(selectDishView,model);
	
	
	
});