//NumGuestViewController Object constructor
var SummaryViewController = function(view, model ) {

	view.printRecipeBtn.click(function(){
		$('#homeView').show();
		$('#numGuestsView').hide();
		$('#summaryView').hide();
	});
}