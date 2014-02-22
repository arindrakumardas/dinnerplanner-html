//NumGuestViewController Object constructor
var NumGuestsViewController = function(view, model ) {
	
	view.backButton.click(function(){
		$('#selectDishView').show();
		$('#homeView').hide();
		$('#numGuestsView').hide();
	});
}