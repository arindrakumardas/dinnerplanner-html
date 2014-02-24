//ExampleView Object constructor
var SelectDishView = function (container,model) {
	
	
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
 
