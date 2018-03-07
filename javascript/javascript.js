//beginning list of items for buttons
	var gifArray=["clown", "ringmaster", "magic trick", "carousel", "Democrats", "Republicans", "Putin"];
	var buttons;
	var buttonText;
	var img;

//on loading the page, run function
	$(window).on("load", function(){
	
//loop to repeat action until end of array length
//using javascript to create button, number of buttons equal to the length of the array
	for (var i = 0; i<gifArray.length; i++){
	buttons= document.createElement("button");
	
//create text to go on button 
	buttonText= document.createTextNode(gifArray[i]);
	
//append child to buttons
	buttons.appendChild(buttonText);
	
//append button to body
	document.getElementById("buttonCreate").appendChild(buttons);
	}

//capture user input and append to end of array; event listener
//on clicking submit button, create new button with user's input as button's text
	$("#submit").on("click", function (event){
		event.preventDefault();
		var userInput= document.getElementById("userChoice").value;
		console.log (userInput);
		gifArray.push(userInput);
		console.log(gifArray);
		//console.log(gifArray[gifArray.length-1]), the last item added to array;
		buttons= document.createElement("button");
		var buttonText2= document.createTextNode(gifArray[gifArray.length-1]);
		buttons.appendChild(buttonText2);
		document.getElementById("buttonCreate").appendChild(buttons);	
	})
//run AJAX request to server
//on clicking an array button, AJAX call is made to outside website to retrieve data, using method/GET and URL
	$("#buttonCreate").on("click", function (event){
		console.log(event.target.innerText);
		//alert('ok');
		var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=DjQ9Drn28De4b1FS5sNAgIX7QsPUlHxV&q=" + (event.target.innerText) +  "&limit=10&offset=0&rating=PG-13&lang=en";
		$.ajax({
			url: queryURL,
			method: "GET"
		})
		.done(function (html){
			console.log(html);
		//console.log(queryURL); 
		for (var i = 0; i<html.data.length; i++){
		var imgURL= (html.data[i].images.downsized_medium.url);
		console.log(imgURL);
		//add img and rating to imgRating div
		$(".imgRating").prepend("<img src=" + imgURL + ">");
		//$(".imgRating").prepend("Rated: " + (html.data[i].rating).toUpperCase());
		
		}
		})
		})
	})
	
	$("#reset").on("click", function reloadPage(){
		location.reload();
	})
		

	
