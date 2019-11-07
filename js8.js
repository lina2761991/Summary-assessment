


button.onclick = function() {
	
var button = document.getElementById("button");
var text = document.getElementById('text').value;
var color = document.getElementById('color').value;
var ul = document.getElementById('ul');
var li = document.createElement("li");



if(color === 'red'){
  
     li.appendChild(document.createTextNode(text)); //
     li.setAttribute("class", "red"); // create li and add to it the color class
     ul.appendChild(li); // append the li to the ul
    
  }

 else if(color === 'yellow'){
     li.appendChild(document.createTextNode(text));
     li.setAttribute("class", "yellow"); 
     ul.appendChild(li);
  }

  else if(color === 'blue'){
      li.appendChild(document.createTextNode(text));
     li.setAttribute("class", "blue"); 
     ul.appendChild(li); 
  
}
  
}

