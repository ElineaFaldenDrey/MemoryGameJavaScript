


let onReadyDom = function (){

	var tabIDClick = [];

	var randomIa = Math.floor(Math.random*3);


	var tabRandomColor = ["color-green"];


	var level = 1;

	var Case = function (element,id){
		this.element = element;
		this.id = id;
		var _self = this;
		this.element.addEventListener("click",function(event){
			tabIDClick.push(event.target.id);
			console.log(tabIDClick);
			event.target.classList.add("active");
			setTimeout(function(){ 
				event.target.classList.remove("active");
			}, 1000);

				console.log(tabRandomColor);

				for (var i = 0; i < tabRandomColor.length; i++) {
					
					    console.log("tabRandomColor[i] =" + tabRandomColor[i]);
					    console.log("tabIDClick[i] =" + tabIDClick[i]);

					if(tabRandomColor[i] == tabIDClick[i]){
						console.log("gagné");
						

					}
					else{
						console.log("perdu");
					}

				}

			

			
		})

	};

	


	// -------- ALLUME CASE -----------------------------------------




	var play = document.getElementById("play");
	let gameScreen;



	let screenGameOver = function(event){
		if (event.key == "ArrowRight"){
			let gameOver = document.getElementById('result');
			gameScreen = document.getElementById("game");
			gameScreen.classList.remove('active');
			gameOver.classList.add('active');
		}
	}



	window.addEventListener("keydown",screenGameOver);
	var mainRedirecGame = function(){
		gameScreen = document.getElementById("game");
		let home = document.getElementById('home');
		home.classList.remove("active");
		gameScreen.classList.add("active");

	}

	play.addEventListener("click",mainRedirecGame);



	/******************* OBJETS + MANIPULATION DOM ************************/

	

	var carre = document.getElementsByClassName("color");

	for (var i = 0; i < carre.length; i++) {
			let maCase = new Case(carre[i],i);
			


		}
	

	



}

window.addEventListener("DOMContentLoaded", onReadyDom);

