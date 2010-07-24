$(document).ready(function() {
    jQuery('a.remote').click(function() {
	var formId = jQuery('a#form_id');
	if(formId != undefined) {
	    console.log("Posting form");
	    var queryString = $('#' + formId).formSerialize();
	    $.post(this.href, queryString);
	}
	return false;
    });
});