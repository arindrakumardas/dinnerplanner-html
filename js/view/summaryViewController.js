//NumGuestViewController Object constructor
var SummaryViewController = function(view, model ) {

	view.printRecipe.click(function(){
		$('#homeView').show();
		$('#numGuestsView').hide();
		$('#summaryView').hide();
	});
}