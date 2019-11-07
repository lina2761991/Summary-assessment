$('#create').click(function() {
	var count = 0;

	if($("#checkbox1").prop('checked')){
		count ++;
	}
	 if($("#checkbox2").prop('checked')){
		count ++;
	}
	 if ($("#checkbox3").prop('checked')){
		count ++;
	}
	
	var $ul = $('ul');
	var $li = $('<li></li>');

	if( count === 3){
     $li.text('black').addClass('black');
     $li.appendTo($ul);

	}
	else if( count === 1){
		if($("#checkbox2").prop('checked')){

	     $li.text('yellow').addClass('yellow');
	     $li.appendTo($ul);
	     }

	     else if($("#checkbox1").prop('checked')){

	     $li.text('blue').addClass('blue');
	     $li.appendTo($ul);
	     }
	     else if($("#checkbox3").prop('checked')){

	     $li.text('red').addClass('red');
	     $li.appendTo($ul);
	     }

	}

	else if( count === 2){

	if($("#checkbox1").prop('checked') && $("#checkbox3").prop('checked')){ 
     $li.text('purple').addClass('purple');
     $li.appendTo($ul);
    }

    else if($("#checkbox1").prop('checked') && $("#checkbox2").prop('checked')){ 
     $li.text('green').addClass('green');
     $li.appendTo($ul);
    }

     else if($("#checkbox3").prop('checked') && $("#checkbox2").prop('checked')){ 
     $li.text('orange').addClass('orange');
     $li.appendTo($ul);
    }

	}
})



	      	
	         
	    