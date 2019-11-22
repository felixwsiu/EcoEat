
var myInput = document.getElementById('myFileInput');

function receivedPic() {
	var file = myInput.files[0];
	console.log('File Retrieved : '+file.name);
	document.getElementById('file').innerHTML = file;
	document.getElementById('ecoquote').innerHTML = 'ready'

	//document.getElementById('i1').innerHTML = "Pork"
		// document.getElementById('c1').innerHTML = "10g"
		// document.getElementById('nameoffood').innerHTML = "Meatballs"
		// document.getElementById('totalemission').innerHTML += "10g"
		// document.getElementById('totalemission2').innerHTML += "600g"
		// document.getElementById('totalemission3').innerHTML += "6000g"
}
myInput.addEventListener('change', receivedPic, false);	