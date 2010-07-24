/* Hackey javascript taken from websocket demo application */

if (!window.WebSocket)
    alert("WebSocket not supported by this browser");

getElement = function() { return document.getElementById(arguments[0]); }
$F = function()  { return document.getElementById(arguments[0]).value; }

function getKeyCode(ev) { 
    if (window.event) return window.event.keyCode; return ev.keyCode; 
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
        getElement('join').className='hidden';
        getElement('joined').className='';
        getElement('phrase').focus();
        room._send(room._username,'has joined!');
    },
    
    _send: function(user,message){
	var finalMessage = {'user': user, 'message':message};
        if (this._ws)
            this._ws.send(JSON.stringify(finalMessage));
    },

    _sendJson: function(data) {
	var finalMessage = {'user': user, 'data': data };
    },
    
    chat: function(text) {
        if (text != null && text.length>0 )
            room._send(room._username,text);
    },
    
    _onmessage: function(m) {
        if (m.data){
	    var data = JSON.parse(m.data);
	    var from = data.user;
	    var text = data.message;
            
            var chat = getElement('chat');
            var spanFrom = document.createElement('span');
            spanFrom.className='from';
            spanFrom.innerHTML=from+':&nbsp;';
            var spanText = document.createElement('span');
            spanText.className='text';
            spanText.innerHTML=text;
            var lineBreak = document.createElement('br');
            chat.appendChild(spanFrom);
            chat.appendChild(spanText);
            chat.appendChild(lineBreak);
            chat.scrollTop = chat.scrollHeight - chat.clientHeight;   
        }
    },
    
    _onclose: function(m) {
        this._ws=null;
        getElement('join').className='';
        getElement('joined').className='hidden';
        getElement('username').focus();
        getElement('chat').innerHTML='';
    }
    
};
