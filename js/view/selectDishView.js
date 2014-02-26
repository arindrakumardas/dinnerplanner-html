//ExampleView Object constructor
var SelectDishView = function (container,model) {
	
/* 	*** This code is loading the dishes ***
	*** but shows only one at a time	*** */
// 	this.images = container.find("#images");
// 	this.starter = container.find("#starter");
// 	this.main = container.find("#main");
// 	this.dessert = container.find("#dessert");

// 	this.starterName = container.find("#starterName");
// 	this.mainName = container.find("#mainName");
// 	this.dessertName = container.find("#dessertName");

// 	this.starterDesc = container.find("#starterDesc");
// 	this.mainDesc = container.find("#mainDesc");
// 	this.dessertDesc = container.find("#dessertDesc");
	

// 	/*****************************************  
// 	      Observer implementation    
// 	*****************************************/
	
// 	//Register an observer to the model
// 	model.addObserver(this);

// 	this.update = function(arg){
		
// 		for(var i = 0; i < model.getAllDishes.length; i++) {
			
// 			var dish = model.getAllDishes('starter')[i];
// 			if(dish.type == 'starter') {
// 				this.starter.attr('src', 'images/' + dish.image);
// 				this.starterName.html(dish.name);
// 				this.starterDesc.html(dish.description);
// 			}

// 			dish = model.getAllDishes('main dish')[i];
// 			if(dish.type == 'main dish') {
// 				this.main.attr('src', 'images/' + dish.image);
// 				this.mainName.html(dish.name);
// 				this.mainDesc.html(dish.description);
// 			}
// 			dish = model.getAllDishes('dessert')[i];
// 			if(dish.type == 'dessert') {
// 				this.dessert.attr('src', 'images/' + dish.image);
// 				this.dessertName.html(dish.name);
// 				this.dessertDesc.html(dish.description);
// 			}
// 		}
// 	}

// 	$('#idvalue').click(function() {
// 		$('#selectDishView').hide();
// 		$('#dishDescriptionView').show();
// 		model.lastClickedDishID = idvalue;
// 	});

	
// 	//Set the inital values of the components
// 	this.update(); //Load all data

// }

 		var sessionlist = "";
		for (var x = 0; x < model.getAllDishes("starter").length; x++) {
		   	var dish = model.getAllDishes('starter')[x];
		    sessionlist += '<li style="display:inline-block;width:200px;height:200px;">' +'<div id=starter' + dish.id + '>' + '<img style="width:150px;height:150px;" src="'+'images/'+ dish.image + '" alt ="'+ dish.image + '">' + '<br>'+ dish.name + '</div>';
		}

		for (var x = 0; x < model.getAllDishes("main dish").length; x++) {
		   	dish = model.getAllDishes('main dish')[x];
		   	sessionlist += '<li style="display:inline-block;width:200px;height:200px;">' +'<div id=starter' + dish.id + '>' + '<img style="width:150px;height:150px;" src="'+'images/'+ dish.image + '" alt ="'+ dish.image + '">' + '<br>'+ dish.name + '</div>';	
			sessionlist += '<br><br></li>';	
		}
			
		for (var x = 0; x < model.getAllDishes("dessert").length; x++) {
		   	dish = model.getAllDishes('dessert')[x];
			sessionlist += '<li style="display:inline-block;width:200px;height:200px;">' +'<div id=starter' + dish.id + '>' + '<img style="width:150px;height:150px;" src="'+'images/'+ dish.image + '" alt ="'+ dish.image + '">' + '<br>'+ dish.name + '</div>';	
		  	sessionlist += '<br><br></li>';	
		}
		
	    document.getElementById("selectDishView").innerHTML=sessionlist;
		
	    for (var x = 0; x < model.getAllDishes("starter").length; x++) {
			var idvalue = "";
			dish = model.getAllDishes('starter')[x];
  			idvalue += '#starter' + dish.id ;
  			$(idvalue).click(function() {
  				$('#selectDishView').hide();
  				$('#dishDescriptionView').show();
				model.lastClickedDishID = idvalue;
  			});
  		}
  				
				
			    // Search functionality in the sidebar
			      var sourceArr = [];

			      $("#searchDish").typeahead({
			          local : sourceArr
			      });


			      $("#searchDish").keyup(function () {
			          var userInput = $(this).val();
			          $("#selectDishView li").map(function (index, value) {
			              $(value).toggle($(value).text().toLowerCase().indexOf(userInput) >= 0);
			          });
			      });		
					
}
