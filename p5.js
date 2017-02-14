function timeNow(i) {
  var d = new Date(),
      h = (d.getHours()<10?'0':'') + d.getHours(),
      m = (d.getMinutes()<10?'0':'') + d.getMinutes();
  i.value = h + ':' + m;
}

function GetClock(input){
	var d=new Date();
	var nhour=d.getHours(),nmin=d.getMinutes(),ap;
	if(nhour==0){ap=" AM";nhour=12;}
	else if(nhour<12){ap=" AM";}
	else if(nhour==12){ap=" PM";}
	else if(nhour>12){ap=" PM";nhour-=12;}

	if(nmin<=9) nmin="0"+nmin;

	document.getElementById('clockbox').innerHTML=""+nhour+":"+nmin+ap+"";
}

window.onload=function(){
	GetClock();
	setInterval(GetClock,1000);
}

function timeDisplay() {
	document.getElementById('time_display').value = document.getElementById('start_time').value + " to " + document.getElementById('end_time').value;
}