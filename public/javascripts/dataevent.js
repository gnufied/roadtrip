/* Hackey javascript taken from websocket demo application */

getElement('username').setAttribute('autocomplete','OFF');
getElement('username').onkeyup = function(ev) { 
    var keyc=getKeyCode(ev); 
    if (keyc==13 || keyc==10) { 
	room.join($F('username')); return false; 
    } 
    return true; 
} ;        
getElement('joinB').onclick = function(event) { 
    room.join($F('username')); 
    return false; 
};
getElement('phrase').setAttribute('autocomplete','OFF');

getElement('phrase').onkeyup = function(ev) { 
    var keyc=getKeyCode(ev); 
    if (keyc==13 || keyc==10) { 
	room.chat($F('phrase')); 
	getElement('phrase').value=''; 
	return false; 
    } 
    return true; 
};

getElement('sendB').onclick = function(event) { 
    room.chat($F('phrase')); 
    getElement('phrase').value=''; 
    return false; 
};
