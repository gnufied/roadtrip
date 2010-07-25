function getScreenName() {
    var screenName = $('form input:text[name=screen_name]').val();
    createCookie('screenName',screenName);
    room.join(screenName);
    $.get('/audience/start_quiz',function(data) {
	$('#get_started').html(data);
    });
    return false;   
}

function submitAnswer() {
    var userChoice = $("form#question_form input:radio[name=answer]:checked").val();
    var jsonResponse = {
	'question_id': $('#question_id').val(),
	'option': userChoice,
	'type': 'user_answer'
    }
    room._sendJson(jsonResponse);
    return false;
}

