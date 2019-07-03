function myFunctionRed() {
	
  var string = "Red";
  var total =0;
	for (var i = 0; i < string.length; i++) {
	total=total+(string.charCodeAt(i));	
	}
	
  mycolor4.style.backgroundColor = "red";
  document.getElementById("output1").innerHTML = "";
  document.getElementById("output2").innerHTML = "&lt;hi, my name is red&gt;";
  document.getElementById("output3").innerHTML = "&lt;"+ total +"&gt;";
}


function myFunctionBlue() {
	
	var string = "Blue";
  var total =0;
	for (var i = 0; i < string.length; i++) {
	total=total+(string.charCodeAt(i));	
	}
  mycolor4.style.backgroundColor = "blue";
  document.getElementById("output1").innerHTML = "";
 document.getElementById("output2").innerHTML = "&lt; hi, my name is blue&gt;";
 document.getElementById("output3").innerHTML = "&lt;"+ total +"&gt;";
}

function myFunctionGreen() {
	
	var string = "Green";
  var total =0;
	for (var i = 0; i < string.length; i++) {
	total=total+(string.charCodeAt(i));	
	}
	
  mycolor4.style.backgroundColor = "green";
  document.getElementById("output1").innerHTML = "";
  document.getElementById("output2").innerHTML = "&lt;hi, my name is green&gt;";
  document.getElementById("output3").innerHTML = "&lt;"+ total +"&gt;";
}
