let images = [
'img/baner.png',
'img/baner2.png'
];
let num = 0;
function next() {
	let slider = 
	document.getElementById('slider');
	num++;
	if(num >= images.length){
		num = 0;
	}
	slider. src = images[num];
}
function prev() {
	let slider = 
	document.getElementById('slider');
	num--;
	if(num <0){ 
		num = images.length-1;
	}
	slider. src = images[num];
}