function setCount(){
	var date = document.getElementById('date');
	var time = document.getElementById('time');
	
	if(time.value == ""){
		alert("Please complete the required field!");
	}else{
		var countDate = new Date(date.value+" "+time.value).getTime();
	
		var countDay = new Date(date.value+" "+time.value).getDate();
	
		var x = setInterval(function(){
			var nowTime = new Date().getTime();
			var nowDate = new Date().getDate();
			var distance = countDate - nowTime;
			var dayDis = countDay - nowDate;
			
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);
			
			document.getElementById("display").innerHTML = dayDis + "d " + hours + "h "
			+ minutes + "m " + seconds + "s ";
			
			
			if (distance < 0) {
				clearInterval(x);
				document.getElementById("display").innerHTML = "Time Expired";
				const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
				audio.play();

			}
			
		}, 1000);
	}
}