var DishDescriptionView = function(container, model) {
    // Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.ingredientheading = container.find("#ingredientheading");
	this.backToSelectDish = container.find("#backToSelectDish");
	this.confirmDishButton = container.find("#confirmDishButton");
	this.dishName = container.find("#dishName");
	this.dishImg = container.find("#dishImg");
	this.dishPrep = container.find("#dishPrep");
	
	model.addObserver(this);

	this.update = function() {
		this.dish = model.getDish(model.getLastClickedDishId());
		this.dishName.html(this.dish.name);
		
		this.dishImg.attr('src', 'images/' + this.dish.image);
		this.dishPrep.html(this.dish.description);
		
		
		
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
			document.getElementById("priceCounter").innerHTML = 'Total Cost: SEK ' + priceCounter*model.getNumberOfGuests();
			this.ingredientheading.html(model.getNumberOfGuests());
	}
		
	this.update(); //Set initial values
	
	
	
	}
	