//ExampleView Object constructor
var SelectDishView = function (container,model) {
	
	this.starter = container.find("#starter");
	this.main = container.find("#main");
	this.dessert = container.find("#dessert");

	this.starterName = container.find("#starterName");
	this.mainName = container.find("#mainName");
	this.dessertName = container.find("#dessertName");

	this.starterDesc = container.find("#starterDesc");
	this.mainDesc = container.find("#mainDesc");
	this.dessertDesc = container.find("#dessertDesc");

	this.starterOpt = container.find("#starterOpt");
	this.mainOpt = container.find("#mainOpt");
	this.dessertOpt = container.find("#dessertOpt");
	this.totalCost = container.find("#totalCost");

	for(var i = 0; i < model.getAllDishes("starter").length; i++) {

//		var dish = model.getAllDishes("starter")[i];
		var div = $("<div>");	
		this.starter = $("<div>");
		//we set the id of the total price span
	this.starter.attr("id","starter");
	//we add total price span to the div
	div.append(this.starter);
	//finally we add the div to the view container
	container.append(div);
	
	//Set the inital values of the components
	this.starter.html(model.getAllDishes("starter")[i]);
	
		
//	}

	for(var i = 0; i < model.getAllDishes("main").length; i++) {

		var dish = model.getAllDishes("main")[i];

		this.main.attr('src', 'images/' + dish.image);
		this.mainName.html(dish.name);
		this.mainDesc.html(dish.description);
	}
	
	for(var i = 0; i < model.getAllDishes("dessert").length; i++) {

		var dish = model.getAllDishes("dessert")[i];

		this.dessert.attr('src', 'images/' + dish.image);
		this.dessertName.html(dish.name);
		this.mainDesc.html(dish.description);
	}
this.totalPrice.html(model.getTotalMenuPrice());	
}
 
