$(document).ready(function() {
    $("a#submit_link").click(function() {
	var userChoice = $("form#question_form input:radio[name=gender]:checked").val();
	console.log(userChoice);
	room._sendJson({'question_id': $('#question_id').val(),'option': userChoice});
	return false;
    });
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