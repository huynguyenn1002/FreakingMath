var timeout;
var state = false;

function random(){
 	timeout = setTimeout(function(){
 		alert('Time Out!!!!')
 	}, 2000)
var ops = ['+', '-'];
var opindex = Math.floor(Math.random()*2);
var operator = ops[opindex];
var num1 = Math.floor(Math.random()*50);
var num2 = Math.floor(Math.random()*50) + 1;
	switch (opindex){
		case 0: result = num1 + num2; break;
		case 1: result = num1 - num2; break;
}	
var fakeresult =  result + Math.floor(Math.random() * 10);
var output = [result,fakeresult];
var index = Math.floor(Math.random()*2);
var answer = output[index];
var check = answer == result ? 1 : 0;

$('#num1').html(num1);
$('#num2').html(num2);
$('#result').html(answer);
$('#operator').html(operator);
	return check;
}
$('.new-playing').click(function(){
	$('.new-playing').hide()
	$('.playing').show()

check = random()
var score = 0
function checkresult(choose) {
	clearTimeout(timeout);
	if (choose == check) {
		score = score + 1;
		check = random();
		state = true;
	}else{
		score = 0
		alert('GameOver')
	}	
$('score').value = score;
	return score;
}
function progress(){
	var count = document.getElementById('progress');
	var width = 1;
	var id = setInterval(frame, 20);
	function frame(){
		if (state) {
			width = 1;
			state = false;
		}else if (width >= 100) {
			clearInterval(id);
		}else{
			width++ ;
			count.style.width = width + '%';	
		}
	}
	return id
}
progress()
})