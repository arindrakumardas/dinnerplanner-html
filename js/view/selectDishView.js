//ExampleView Object constructor
var SelectDishView = function (container,model) {
	
	this.images = container.find("#images");
	this.starter = container.find("#starter");
	this.main = container.find("#main");
	this.dessert = container.find("#dessert");

	this.starterName = container.find("#starterName");
	this.mainName = container.find("#mainName");
	this.dessertName = container.find("#dessertName");

	this.starterDesc = container.find("#starterDesc");
	this.mainDesc = container.find("#mainDesc");
	this.dessertDesc = container.find("#dessertDesc");
	

	/*****************************************  
	      Observer implementation    
	*****************************************/
	
	//Register an observer to the model
	model.addObserver(this);

	this.update = function(arg){
		
		for(var i = 0; i < model.getAllDishes.length; i++) {
			
			var dish = model.getAllDishes('starter')[i];
			if(dish.type == 'starter') {
				this.starter.attr('src', 'images/' + dish.image);
				this.starterName.html(dish.name);
				this.starterDesc.html(dish.description);
			}

			dish = model.getAllDishes('main dish')[i];
			if(dish.type == 'main dish') {
				this.main.attr('src', 'images/' + dish.image);
				this.mainName.html(dish.name);
				this.mainDesc.html(dish.description);
			}
			dish = model.getAllDishes('dessert')[i];
			if(dish.type == 'dessert') {
				this.dessert.attr('src', 'images/' + dish.image);
				this.dessertName.html(dish.name);
				this.dessertDesc.html(dish.description);
			}
		}
	}

	$('#idvalue').click(function() {
		$('#selectDishView').hide();
		$('#dishDescriptionView').show();
		model.lastClickedDishID = idvalue;
	});

	
	//Set the inital values of the components
	this.update(); //Load all data

}

/* ----------------------------------------- 
		var sessionlist = "";
		    for (var x = 0; x < model.getAllDishes("starter").length; x++) {
		      sessionlist += '<div id=add' + model.getAllDishes("starter")[x].id + '>' 
			  + model.getAllDishes("starter")[x].name 
			  + '<img src="'+'images/'+ model.getAllDishes("starter")[x].image 
			  + '" alt ="'+ model.getAllDishes("starter")[x].image + 
			  '">' + '</div>';
			  
			 //  console.log(model.getAllDishes("starter")[x].name);
			}
		 //  sessionlist += '<br></li>';
		 
	    document.getElementById("selectDishView").innerHTML=sessionlist;
	
		
		    for (var x = 0; x < model.getAllDishes("starter").length; x++) {
				var idvalue = "";
  				idvalue += '#add' + model.getAllDishes("starter")[x].id ;
  				$(idvalue).click(function() {
  					$('#selectDishView').hide();
  					$('#dishDescriptionView').show();
					model.lastClickedDishID = idvalue;
  					});
  			}
  				
							// 	
				// $("#add2").click(function() {
				// 	$('#selectDishView').hide();
				// 	$('#dishDescriptionView').show();
				// 	});
					
}
 */
