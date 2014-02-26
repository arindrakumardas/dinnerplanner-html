//ExampleViewController Object constructor
var DishDescriptionView = function(container, model) {
    // Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	
	this.backToSelectDish = container.find("#backToSelectDish");
	this.confirmDishButton = container.find("#confirmDishButton");
	this.dishName = container.find("#dishName");
<<<<<<< HEAD
	this.dishImg = container.find("#dishImg");
	this.dishPrep = container.find("#dishPrep");
=======

>>>>>>> DIshDescIngredients
	
	model.addObserver(this);

	this.update = function() {
		this.dish = model.getDish(model.getLastClickedDishId());
		this.dishName.html(this.dish.name);
<<<<<<< HEAD
		// this.dishImg.attr('src', 'images/' + dish.image);
		// this.dishPrep.html(view.dish.description);
=======
		
			var ingredientlist = "";
			var priceCounter = 0;
			for (var x = 0; x < this.dish.ingredients.length; x++) {
				ingredientlist +=  '<span style="padding:10px;">'
				+ this.dish.ingredients[x].name + '</span><span style="padding:10px;">' 
				+ this.dish.ingredients[x].quantity  
				+ this.dish.ingredients[x].unit + '</span><span style="padding:10px;">' 
				+ 'SEK ' + this.dish.ingredients[x].price + '</span><br>';
				priceCounter += this.dish.ingredients[x].price;
			}
			
			document.getElementById("ingredientlist").innerHTML = ingredientlist;
			document.getElementById("priceCounter").innerHTML = 'SEK ' + priceCounter;
>>>>>>> DIshDescIngredients
	}
		
	this.update(); //Set initial values
	
	
	
	}
	