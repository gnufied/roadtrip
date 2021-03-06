/* Hackey javascript taken from websocket demo application */

    if (!window.WebSocket)
	alert("WebSocket not supported by this browser");

getElement = function() { return document.getElementById(arguments[0]); }
$F = function()  { return document.getElementById(arguments[0]).value; }

function getKeyCode(ev) { 
    if (window.event) return window.event.keyCode; return ev.keyCode; 
} 

function createCookie(name,value,days) {
    if (days) {
	var date = new Date();
	date.setTime(date.getTime()+(days*24*60*60*1000));
	var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
	var c = ca[i];
	while (c.charAt(0)==' ') c = c.substring(1,c.length);
	if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

var room = {
    join: function(name) {
        this._username=name;
        var location = 'ws://solaro.local:8080/socket';

        this._ws = new WebSocket(location);
        this._ws.onopen = this._onopen;
        this._ws.onmessage = this._onmessage;
        this._ws.onclose=this._onclose;
    },
    
    _onopen: function(){
        room._send(room._username,'has joined!');
    },
    
    _send: function(user,message){
	var finalMessage = {'user': user, 'message':message};
        if (this._ws)
            this._ws.send(JSON.stringify(finalMessage));
    },

    _sendJson: function(data) {
	var finalMessage = {'user': room._username, 'data': data };
	if (this._ws)
            this._ws.send(JSON.stringify(finalMessage));
    },
    
    chat: function(text) {
        if (text != null && text.length>0 )
            room._send(room._username,text);
    },
    
    _onmessage: function(m) {
        if (m.data){
	    var data = JSON.parse(m.data);
	    console.log(data);
	    if(data.message_type != undefined) {
		if(data.message_type == 'question') {
		    var question = data.question;
		    var answers = data.answers;
		    $('#question_content').html(question.content);
		    $('#question_id').val(question.id);
		    var content = '';
		    for(index in answers) {
			console.log(answers[index]);
			var answer = answers[index];
			console.info(answer);
			content += "<input type='radio' name='answer' value='" + answer.id + "'>";
			content += answer.content + "<br />";
		    }
		    $('#answer_choices').html(content);
		    $('#your_result').html('');
		    $('#stats').html('');
		}else if(data.message_type == 'user_response') {
		    plotStuff(data);
		}
	    }
            
        }
    },
    
    _onclose: function(m) {
	console.log("Close he connection");
        this._ws=null;
        getElement('username').focus();
        getElement('chat').innerHTML='';
    }
    
};
