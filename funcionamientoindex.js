
var vector=["Samuel"];

var enviar=function(){

var n2=document.getElementById("div1");
var n3=document.getElementById("div2");


	n2.className="div1d";
	n3.className="div2d";

}

var enviar3=function(){

var n1=document.getElementById("div11").value;

vector.push(n1);
	document.getElementById("div11").value="";
	

}

var enviar2=function(){

var n4=document.getElementById("cajon2").value;


var i=0;


var vultimo=vector.length-1; 

	while(i<vector.length)
	{
		if(n4==vector[i])
		{
			var final=vector[vultimo];vector[vultimo]=vector[i];


			vector[i]=final;
			vector.pop();


			i=vector.length;
			document.getElementById("mensaje").value="El nombre fue borrado";
			document.getElementById("cajon2").value="";
		}
		else
		{
			i=i+1;
			if (n4!=vector[i])
			{
				document.getElementById("mensaje").value=n4+" Este nombre no existe";
			}
		}
	}

}

var enviar4=function(){


var n2=document.getElementById("div1");
var n3=document.getElementById("div2");


	n2.className="div1";
	n3.className="div2";
}
