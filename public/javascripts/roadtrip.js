$(document).ready(function() {
    $("form#question_form a#submit_link").click(function(item) {
	console.log($("form#question_form input:radio[name=gender]:checked").val());
	return false;
    });
});