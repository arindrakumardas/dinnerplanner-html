//ExampleView Object constructor
var SelectDishView = function (container,model) {
	
	
		var sessionlist = "";
		    for (var x = 0; x < model.getAllDishes.length; x++) {
		      sessionlist += '<li>' +  model.getAllDishes("starter")[x].name + 
			  
			  '<li><img src="'+'images/'+model.getAllDishes("starter")[x].image+'" alt ="'+model.getAllDishes("starter")[x].image+'"></li>';
			   console.log(model.getAllDishes("starter")[x].name);
			}
		   sessionlist += '<br></li>';
	    document.getElementById("selectDishView").innerHTML=sessionlist;
	
	
}
 
