var mas = ["i1.jpg","i2.jpg","i3.jpg","i4.jpg","i5.jpg"]
var to = 0;
function right_arrow() 
{
	var obj = document.getElementById("img");
			if (to < mas.length-1) to++
				else to = 0;
			obj.src = mas[to];
}

function left_arrow()
{
	var obj = document.getElementById("img");
		if (to > 0) to--
		else to =mas.length-1;
	obj.src = mas[to];
	
}
function arr_invisible() {
	var arr = document.getElementById("leftright"); 
	arr.style.display="none";
	
}
function arr_visible() {
	
	var arr = document.getElementById("leftright"); 
	arr.style.display="block";
	
}