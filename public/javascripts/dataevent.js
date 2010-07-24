/* Hackey javascript taken from websocket demo application */

$('username').setAttribute('autocomplete','OFF');
$('username').onkeyup = function(ev) { 
    var keyc=getKeyCode(ev); 
    if (keyc==13 || keyc==10) { 
	room.join($F('username')); return false; 
    } 
    return true; 
} ;        
$('joinB').onclick = function(event) { 
    room.join($F('username')); 
    return false; 
};
$('phrase').setAttribute('autocomplete','OFF');

$('phrase').onkeyup = function(ev) { 
    var keyc=getKeyCode(ev); 
    if (keyc==13 || keyc==10) { 
	room.chat($F('phrase')); 
	$('phrase').value=''; 
	return false; 
    } 
    return true; 
};

$('sendB').onclick = function(event) { 
    room.chat($F('phrase')); 
    $('phrase').value=''; 
    return false; 
};
