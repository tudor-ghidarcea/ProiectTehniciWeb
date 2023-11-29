/*modificare stil element*/
document.getElementById("logo").style.color = "teal";
document.getElementById("container").style.color="teal";
/*event listener*/
 document.getElementById('intro').addEventListener('click', clicked);
function clicked(ev){
//modificare trasatura
	console.log('You clicked',clicked.id);
	
	
	}
	

function changeColor(){

		myObj=document.querySelector("#container");
		myObj.setAttribute('class','democlass');


}
