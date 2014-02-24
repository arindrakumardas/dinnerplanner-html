//NumGuestViewController Object constructor
var NumGuestsViewController = function(view, model ) {

	view.backButton.click(function(){
		$('#homeView').show();
		$('#numGuestsView').hide();
		$('#summaryView').hide();
	});
}