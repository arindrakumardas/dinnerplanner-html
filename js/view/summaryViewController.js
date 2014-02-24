//NumGuestViewController Object constructor
var SummaryViewController = function(view, model ) {

	view.printRecipeBtn.click(function(){
		$('#summaryView').hide();
		$('#instructionsView').show();
	});
}