var colors = generateRandomColors(6);
	numSquares = 6;
	var squares = document.querySelectorAll(".square");
	var pickedColor = pickColor();
	var colorDisplay = document.getElementById("colorDisplay");
	var msgDisplay = document.querySelector("#msg");
	var h1 = document.querySelector("h1");
	var resetButton = document.querySelector("#reset");
	//var easyBtn = document.querySelector("#easybtn");
	//var hardBtn = document.querySelector("#hardbtn");
	var modebtn = document.querySelectorAll(".mode");

	for( var i = 0; i < modebtn.length; i++){
		modebtn[i].addEventListener("click",function(){
			modebtn[0].classList.remove("selected");
			modebtn[1].classList.remove("selected");
			this.classList.add("selected");
			//figure how any squares to show.
			//pick new color.
			//pick  new picked color.
			//update page to reflect changes.
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}

	function reset(){
		msgDisplay.textContent = "";
		resetButton.textContent = "New Color";
		//generate all random colors.
		colors = generateRandomColors(numSquares);
		//pick a random color.
		pickedColor = pickColor();
		//change color display to matched pick color.
		colorDisplay.textContent = pickedColor;
		//change color of squares.
		for( var i = 0; i < squares.length; i++){
			if(colors[i]){
				squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
		h1.style.background = "steelblue";
	}
}

	// easyBtn.addEventListener("click",function(){
	// 	hardBtn.classList.remove("selected");
	// 	easyBtn.classList.add("selected");
	// 	numSquares = 3;
	// 	colors = generateRandomColors(numSquares);
	// 	pickedColor = pickColor();
	// 	colorDisplay.textContent = pickedColor;
	// 	for(var i = 0; i < squares.length; i++){
	// 		if(colors[i]){
	// 			squares[i].style.background = colors[i];
	// 		} else{
	// 			squares[i].style.display = "none";
	// 		}
	// 	}
	// });

	// hardBtn.addEventListener("click",function(){
	// 	hardBtn.classList.add("selected");
	// 	easyBtn.classList.remove("selected");
	// 	numSquares = 6;
	// 	colors = generateRandomColors(numSquares);
	// 	pickedColor = pickColor();
	// 	colorDisplay.textContent = pickedColor;
	// 	for(var i = 0; i < squares.length; i++){
	// 			squares[i].style.background = colors[i];
	// 			squares[i].style.display = "block";
	// 	}
	// });

	resetButton.addEventListener("click",function(){
		msgDisplay.textContent = "";
		this.textContent = "New Color";
		//generate all random colors.
		colors = generateRandomColors(numSquares);
		//pick a random color.
		pickedColor = pickColor();
		//change color display to matched pick color.
		colorDisplay.textContent = pickedColor;
		//change color of squares.
		for( var i = 0; i < squares.length; i++){
			squares[i].style.background = colors[i];
		}
		h1.style.background = "steelblue";
	});

	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
		//add initial colors to squares.
		squares[i].style.background = colors[i];
		//add click listeners to square.
		squares[i].addEventListener("click",function(){
			//grab color of clicked square.
			var clickedColor = this.style.background;
			//compare color to clicked square.
			//console.log(clickedColor,pickedColor);
			if(clickedColor === pickedColor){
				msgDisplay.textContent = "CORRECT";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else{
				this.style.background = "#232323";
				msgDisplay.textContent = "TRY AGAIN!";
			}
		});
	}

	function changeColors(color){
		//loop through all squares.
		for(var i = 0; i < squares.length; i++){
			//change color to match given color.
			squares[i].style.background = color;
		}	
	}

	function pickColor(){
		var random = Math.floor(Math.random()*colors.length);
		return colors[random];
	}

	function generateRandomColors(num){
		//make an array.
		var arr = []
		//repeat num times.
		for(var i = 0; i < num; i++){
			//get random color and push to arr.
			arr.push(randomColor());
		}
			//return that array.
			return arr;
	}

	function randomColor(){
		//pick a red from 0-255.
		var r = Math.floor(Math.random() * 256);
		//pick a green from 0-255.
		var g = Math.floor(Math.random() * 256);
		//pick a blue from 0-255.
		var b = Math.floor(Math.random() * 256);

		return "rgb(" + r + ", " + g + ", " + b + ")";
			}