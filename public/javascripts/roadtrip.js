$(document).ready(function() {
    $('a#screen_name_link').click(function() {
	var screenName = $('form input:text[name=screen_name]').val();
	createCookie('screenName',screenName);
	room.join(screenName);
	$.get('/audience/start_quiz',function(data) {
	    $('#screen_name_page').html(data);
	});
	return false;
    });
});

$('a#submit_link').live('click',function() {
    var userChoice = $("form#question_form input:radio[name=answer]:checked").val();
    var jsonResponse = {
	'question_id': $('#question_id').val(),
	'option': userChoice,
	'type': 'user_answer'
    }
    room._sendJson(jsonResponse);
    return false;
});
