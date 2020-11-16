string_1 = "Clicked"; 

p1 = document.querySelector("p"); 
p1.style.color = "blue"; 
l = document.querySelector("ul"); 
l.style.color = "blue"; 
newli = document.createElement("li"); 
newli.innerHTML = "Hellooo"; 
l.insertBefore(newli, l.children[1]);
l.children[0].remove(); 
function handler(event)
{
	//console.log(event.target.innerHTML); 
	event.target.style.color = "yellow"; 
} 
document.querySelector("p").addEventListener("click", handler); 


var text = '{"name":"Thor:ragnorak", "cast":["tom hiddleston", "chris"]}'; 
var obj = JSON.parse(text); 
document.querySelector("p").innerText = obj.name; 
obj.year = "2017"; 

c1 = document.querySelector("#c1"); 
ctx = c1.getContext("2d"); 

ctx.fillStyle = "#FF0000"; 
ctx.arc(100, 100, 80, 0, 4*Math.PI, 1); 
ctx.fill(); 

