// Remember to relax and ask for help when you need it (only from staff)
// YOU CAN ONLY USE MDN AS A RESOURCE for JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// you can use W3 school for HTML-CSS
// for the jquery you can only use jquery documentaion.
// https://api.jquery.com
// NOTE: you are accountable for your styling, so make sure your styling is good.
// ANOTHER NOTE:leave comments about your intent or pseudo-code describing your plan.

// Use the following helper functions in your solution

function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function(element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  }
  
  function map(array, func) {
    var acc = [];
    each(array, function(element, i) {
      acc.push(func(element, i));
    });
    return acc;
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function(element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }
  
  //=============================================================================
  /*                              Q1                                           */
  //=============================================================================
  //write a function that takes a string as an input and returns an array
  //containing the length of each word in that string.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  //wordLengths("hello its me") // [5,3,2]
  
  function wordLengths(str) {
      var arr = str.split(' '); // we convert the string to an array of words 
      return map(arr,function(element){ // we return a map that takes our array and a function that takes each element of the array as a parameter ,we used map because it returns an array
      	return element.length; // we return each length of the element in the new array 
      }) 
  }
  
  //=============================================================================
  /*                                  Q2                                    */
  //=============================================================================
  //Write a function countOccurrences that accepts two parameters: a string, 
  // and a character (e.g. "a"), and returns number of times that character occured.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  // countOccurrences("hello", "l"); // 2
  // countOccurrences("hello, world!", "l"); // 3
  
  function countOccurrences(string, character) {
  	var arr = string.split(''); // we convert our string to an array of letters 
  	return reduce(arr,function(count, element){ // we use reduce to have just one number as a return since we assigned the first value of the count(wich is our accumulator)to a number
  		if(element === character){// whenever an element if equal to our character we add one to count
  			count++;
  		}
  		return count;	// we return the count(number of repetition of our character)
  	},0) 
  }
  
  //=============================================================================
  /*                                  Q3                                    */
  //=============================================================================
  //write a function that takes a string as an input and returns an array
  //with only the words of length that are longer than 3.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  // wordsLongerThanThree("Hello Mad World") //["Hello", "World"]
  
  function wordsLongerThanThree(str) {
      var arr = str.split(' '); // we convert our string to an array of words
      return filter(arr,function(element){ // we use filter because we are going to filter our array according to a condition 
      	return element.length > 3; // we return the elements that have a length greater than 3
      }) 
   }
  
  //=============================================================================
  /*                                  Q4                                        */
  //=============================================================================
  //Using recursion, write a function called repeatString that takes two parameters: a string str, 
  //which is the string to be repeated, and count, a number 
  //representing how many times the string str should be repeated.
  //repeatString('dog', 0); // => '' 
  //repeatString('dog', 1); // => 'dog' 
  //repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog' 
  //repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'
  
  function repeatString(str, count) { 
   if(count === 0){ // this is our stopping condition, if the count is 0 
   	return "" ; // then we return empty string
   }

   return str + repeatString(str, count - 1); // we return the string that we put as a parameter and we add to it the function "repeatString" with the same parameter but with a count minus 1
  } 
   
  
  //=============================================================================
  /*                                  Q5                                       */
  //=============================================================================
  /*
   using closures create a function called makePizza that has the following properties and methods
   crust a property represented by a string. ex "thin","thick". 
   size a property represented by a string. ex "M","L".
   numberOfSlice a property that hold the number of slice, ex: 8
   ** the values of all properties will be provided as arguments in the function invocation. 
   addIngredients a function that add a new ingredient to the ingredients property.
   displayIngredients a function that displays a comma separated string of all ingredients. ex: The ingredients are:tomato,mushroom,meat
   bakePizza a function that display a string with your pizza description after 2 seconds. ex "Your thin M 8 slice pizza is done" 
   eatSlice a function that let you eat from the pizza as long as the numberOfSlice is greater than zero and decrease the total number of slices by one.
   */
  //Example:
  // var pizza = makePizza("thin", "M", 2);
  // pizza.addIngredients("tomato");
  // pizza.addIngredients("meshroom");
  // pizza.addIngredients("meat");
  // console.log(pizza.displayIngredaints());
  // pizza.bakePizza();
  // pizza.eatSlice();
  // pizza.eatSlice();
  // pizza.eatSlice();
  
  // Write your code here .....

  function makePizza(crust, size, numberOfSlice){
  	var ingredients = []; // we create an empty array for the ingredients
 
  	return{
  		crust:crust, // we assign the crust propretyt to the variable crust
  		size:size, // we assign the size proprety to the variable size
  		numberOfSlice:numberOfSlice, // we assign the number of slices proprety to the number f slices parameter
  		addIngredients: function(ingredient){ // we create add ingredients function that takes an ingredient as parameter 
  			ingredients.push(ingredient); // we push the new ingredient to the ingredients array
  		},
  		displayIngredients: function(){ // we create display ingredients to see all our ingredients
  			return 'The ingredients are:' + ingredients.join(' , '); // it returns the list of our igredients that are in the array as a string with comma  between each 2
  		},
  		bakePizza: function(){ // we create bake pizza function 
  			return setInterval(function(){console.log('Your ' + crust + ' ' + size + ' ' + numberOfSlice + ' slice pizza is done')},2000); //we return the information of our pizza after 2 seconds from calling the function 

  		},
  		eatSlice: function(){ // we create eat slice function 

  			while(numberOfSlice > 0){ //while the number of slices if greater than 0 
			numberOfSlice = numberOfSlice -1; // when we call the function the number decreases by one 
			return 'you still have only ' + numberOfSlice + ' slices'; // we return message of the number of slices left 
		}

		return 'you dont have any slice ! ';// if number of slices if less than 0 we display this message 
 
  		}
  	}
  }
  
  //=============================================================================
  /*                                  Q6                                      */
  //=============================================================================
  /*
  Create a ReadingList class by using OOP concept, where:
  Your class should has:
  "read" for the number of books that finish reading
  "unRead" for the number of books that still not read
  "toRead" array for the books names that want to read in the future
  "currentRead" for the name of the book that is reading currently
  "readBooks" Array of the names of books that finish read
  "AddBook" function that:
  a- Accept the book name as parameter
  b- Add the new book to "toRead" array
  c- Increment the number of the unread books.
  "finishCurrentBook" function that:
  a- Add the "currentRead" to the "readBooks" array
  b- Increment the "read" books
  c- Change the "currentRead" to be the first book from "toRead" array
  d- Decrement the number of "unread" books
  */
  
  // Now, to make sure that you are actually reading, make a comment below this and type: Yes I am

  //Yes I am
  
  // Write your code here .....


 function Reading(){
	 
	var reading = {};//we create an empty reading project

	reading.toRead = ['to read1', 'to read2'];// array of the books to read 
	reading.readBooks = ['read1', 'read2'];// array of the books you read 

	reading.read = reading.readBooks.length//number of finished reading bokks  
	reading.unreadBook = reading.toRead.length;// number of not read books
	reading.currentRead = 'current read';//name of books reading currently 

	reading.finishCurrentBook = finishCurrentBookF; // we assign to the finishCurrentBook the finishCurrentBookF function 
	reading.addBook = addBookF;// we assign to the addBook the addBookF function

	return reading; // we return the object which we have created and assigned the variables to
}

var addBookF = function(name){	//this is our add BookF function 
	this.toRead.push(name); //we push to our array of books to read the new book
	this.unreadBook = this.unreadBook + 1;//we increment the number of unread books by one
}

var finishCurrentBookF = function(){ // we declare our finsihCurrent  
	this.readBooks.push(this.currentRead); //we add the current book to the readBooks array
	this.read = this.read + 1; // we increment the number of read books
	this.currentRead = this.toRead[0]; //we change the current read to the first to read book
	this.unreadBook = this.unreadBook - 1; // we decrement the number of unreadbooks by 1
	this.toRead.shift(); //we remove the first element from toRead 
}

  
  //=============================================================================
  /*                                  Q7                                       */
  //=============================================================================
  //Using closures create makeSafe Function that accepts an initial integer value to specify the storage size limit
  //makeSafe should contain addItem function that accepts two parameters the item and the itemSize as Strings
  //itemSize should be either "big", "medium" and "small"
  //big sized items will hold 3 slots in the storage
  //medium sized items will hold 2 slots in the storage
  //small sized items  will hold 1 slot in the storage
  //return "Can't fit" if you try to add an item that exceeds the storage size limit
  //when the safe is full return a string representing all the items that are in the safe
  //Example:
  //  var safe = makeSafe(5)
  //  safe('watch','small')
  //  safe('gold-bar','big')
  //  safe('silver-bar','big') => "Can't fit"
  //  safe('money','small') => "watch gold-bar money"
  
  // Write your code here .....


  function makeSafe(initial){
	var storageLimit = initial;
	var storage = 0;
	var count = 0;
	var iteml = [];
	return {
		addItem: function(item,itemSize){
			if(count === 1){
				return iteml.join(' ');
			}
			else {

			if(itemSize ==="big"  ){
				if (storageLimit-storage>=3){
				storage = storage + 3;
				iteml.push(item);
			}
			else {
				count = count + 1;
				return 'cant fit';
			}	
		}
			else if (itemSize === "medium"){
				if (storageLimit-storage>= 2){
				storage = storage + 2;
				iteml.push(item);
			}
			else {
				count = count + 1;
				return  'cant fit';
			}
			}
			else if (itemSize === "small"){
					if (storageLimit-storage>= 1){
				storage = storage + 1;
				iteml.push(item);
			}else {
				count = count + 1;
				return 'cant fit';
			}
			
		}
	   }
      }
	}
}
  

  //=============================================================================
  /*                                  Q8                                       */
  //=============================================================================
  
  //Create HTML, CSS & JS files and connect them together
  //Add Two text input fields, one with a placeholder input, and another with color
  //Add a button below them and an empty unordered list below the button
  //Create 3 CSS classes (red, yellow, blue)
  //Create a javascript function that adds an item list to the unordered list
  //If the color value is red, yellow or blue
  //Add the CSS class to the item accordingly
  //Do not add a list item if the color value is non of the colors
  
  //DO NOT USE JQUERY
  
  //================================================================================
  /*                              Q9                                            */
  //================================================================================
  
  //Create HTML, CSS & JS files
  //Link jQuery
  //Create an empty unordered list
  //Create three input elements of type checkbox
  //Create two buttons "create" & "remove"
  //Create 7 classes in CSS each with the appropriete color (black, purple, green, orange, red, yellow, blue)
  //Using jQuery run a function that gets called using the button's id (#create)
  //The function takes see if the checkboxes are checked or not (true or false), use $("#id").prop('checked')
  //If all 3 checkboxes are checked add an list item with the word black in it and add the "black" class to it
  //If 2 of the checkboxes are checked add (purple = blue + red), (green = blue + yellow), (orange = red + yellow)
  //If 1 of the checkboxes is checked add (yellow, blue or red) as li and the class to it
  
  //Using jQuery call a function from the button's id (#delete)
  //The function removes all the elements from the unordered list based on the checkboxes as the previous function
  //Use jQuery as much as you can in selecting elements and other tasks
  
  //================================================================================
  /*                              Q10                                           */
  //================================================================================
  // Theoretical questions.
  // 1- In your own words,Why do we use Closures ?
  // we use closures in order to call functions inside a function;
  // we call the function as instance 
  // we protect our variables 
  
  // 2- In OOP, what does "this" refer to ?
  // this refers to the object outside the function 
  
  // 3- What is jQuery?
  //it is a javascript library that has so many ready javascript methods
  
  // 4- what is the diffrence between Closure's methods and The OOP's methods?

  // oop methods are outside variables we call each to an each object while closure methods are related to the parent function 
  