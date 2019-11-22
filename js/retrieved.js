var myInput = document.getElementById('myFileInput');

function receivedPic() {
	var file = myInput.files[0];
	console.log('File Retrieved : '+file);
}
console.log('asdasd')
myInput.addEventListener('change', receivedPic, false);	