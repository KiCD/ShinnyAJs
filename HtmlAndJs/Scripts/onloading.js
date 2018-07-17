window.onload = function(){ var textToShow = prompt("What text do you want me to show?");
var placeholder = document.getElementById("messagePlaceHolder");
if (placeholder === null )
	alert("placeholder not found")
else
	placeholder.innerHTML=textToShow;
}
