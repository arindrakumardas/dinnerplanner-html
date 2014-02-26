var SelectDishViewController = function(view, model ) {

	$(document).on("change", "#option", function(){
	    var selected = this.value;
	    if(selected=="Starters") {
	    	$('#starters').show();
	    	$('#main').hide();
	    	$('#desserts').hide();
	    }
	    else if(selected=="Main course") {
	    	$('#starters').hide();
	    	$('#main').show();
	    	$('#desserts').hide();
	    }
	    else if(selected=="Desserts") {
	    	$('#starters').hide();
	    	$('#main').hide();
	    	$('#desserts').show();
	    } else if(selected == "All") {
	    	$('#starters').show();
	    	$('#main').show();
	    	$('#desserts').show();
	    }
	});
	
}
