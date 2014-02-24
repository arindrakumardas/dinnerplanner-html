//ExampleView Object constructor
var SelectDishView = function (container,model) {
	
	
		var sessionlist = "";
		    for (var x = 0; x < model.getAllDishes.length+1; x++) {
		      sessionlist += '<div id=add' + model.getAllDishes("starter")[x].id + '>' 
			  
			   + model.getAllDishes("starter")[x].name 
			  
		//	  '<button type="button">SAS</button>' + 
			  
			  // '<a href="#" id="dishDescriptionView">click me</a>' 
			  
			  + '<img src="'+'images/'+ model.getAllDishes("starter")[x].image 
			  + '" alt ="'+ model.getAllDishes("starter")[x].image + 
			  '">' + '</div>';
			  
			   console.log(model.getAllDishes("starter")[x].name);
			}
		 //  sessionlist += '<br></li>';
	    document.getElementById("selectDishView").innerHTML=sessionlist;
	
		var idvalue = "";
		    for (var x = 0; x < model.getAllDishes.length+1; x++) {
  	
  				idvalue += '#add' + model.getAllDishes("starter")[x].id ;
  				$(idvalue).click(function() {
  					$('#selectDishView').hide();
  					$('#dishDescriptionView').show();
  					});
  			}
  				
								// 
				// $("#add2").click(function() {
				// 	$('#selectDishView').hide();
				// 	$('#dishDescriptionView').show();
				// 	});
					
}
 
