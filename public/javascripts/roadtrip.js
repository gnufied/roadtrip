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

function plotStuff(dataPoints) {
    var statString = '<h2>Overall Stats</h2><p class="correct">';
    statString += dataPoints.correct_count + ' Correct </p><p class="incorrect">';
    statString += dataPoints.incorrect_answer + ' Incorrect </p><p><hr />';
    statString += dataPoints.total_count + ' Total </p>';
    $('#stats').html(statString);
    //$('#stats').effect("highlight", {}, 3000);
    if(dataPoints.correct)
	$('#your_result').html("<img src='/images/button_accept.png' /> &nbsp;&nbsp;&nbsp; Your answer was correct");
    else
	$('#your_result').html("<img src='/images/button_cancel.png' /> &nbsp;&nbsp;&nbsp; Your answer was incorrect");
}
