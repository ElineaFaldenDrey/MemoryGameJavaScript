


let onReadyDom = function (){

	
 // -------- DECLARATION VARIABLES ESSENTIELLES ------------------------------------------------------------------------

	var randomIA = Math.floor(Math.random*3);
	var soundsTab = ["sounds_01","sounds_02","sounds_03","sounds_04"];
	var soundsObj = [];
	console.log(soundsObj);


	var level = 1;

	// -------- Tableaux à comparer ----------//

	var tabRandomColor = [];

	var tabIDClick = [];

	// -------- DEFINITION OBJET PRINCIPAL ------------------------------------------------------------------------------

	var Case = function (element, id){

		this.element = element;
		this.id = id;
		var _self = this;

		// SORTIR CETTE PARTIE DU CODE DE L'OBJET ????

		this.element.addEventListener("click", function(event)
		{
			// Quand on clique sur la case, on va mettre dans le tabIDCLick l'id de la case
			tabIDClick.push(event.target.id);
			// console.log("VERIFICATION tabIDClick = " + tabIDClick);
			soundsObj[_self.id].play();

			// On ajoute ensuite la classe active aux classe actuelles de la case cliquée
			event.target.classList.add("active");

			// on laisse 1seconde la case allumée et puis on retire la classe active des classes actuelles de la case cliquée
			setTimeout(function()
			{ 
				event.target.classList.remove("active");

			}, 1000);

				// console.log("VERIFICATION tabRandomColor = " + tabRandomColor);

				

				// On compare les 2 tableaux, s'il sont égaux gagné, sinon perdu
				for (var i = 0; i < tabRandomColor.length; i++) 
				{
						
					    // console.log("tabRandomColor[i] =" + tabRandomColor[i]);
					    // console.log("tabIDClick[i] =" + tabIDClick[i]);

					if(tabRandomColor[i] == tabIDClick[i])
					{
						console.log("gagné");
						level++;
						

					}
					else
					{
						console.log("perdu");
						screenGameOver();

					}

				}			
		})



	};



	


	// -------- ALLUME CASE RANDOM -----------------------------------------

	Case.prototype.remplirTableauRandom = function()
	{

		
		// on utilise level
		for (var i = 0; i < level; i++) 
		{

			// on crée un int entre 0 et 4 représentant une couleur différente (on sait qu'il y en a 4)
			var randomIA =parseInt(Math.floor(Math.random() * 4 ));
			// console.log("VERIFICATION RANDOMIA = " + randomIA);

			// on switch sur le int qu'on a eu au dessus et selon le chiffre assigné à une couleur, on push cette valeur dans le tableau
			switch(randomIA)
			{
				case 0:
					tabRandomColor.push("color-green");
					// on ajoute la classe active a celui qui a l'ID color green
					document.getElementById("color-green").classList.add("active");
					setTimeout(function()
					{ 
						document.getElementById("color-green").classList.remove("active");

					}, 1000);
					break;
				case 1:
					
					tabRandomColor.push("color-red");
					// on ajoute la classe active a celui qui a l'ID color green
					document.getElementById("color-red").classList.add("active");
					setTimeout(function()
					{ 
						document.getElementById("color-red").classList.remove("active");

					}, 1000);
					break;
					
				case 2:
					tabRandomColor.push("color-blue");
					document.getElementById("color-blue").classList.add("active");
					setTimeout(function()
					{ 
						document.getElementById("color-blue").classList.remove("active");

					}, 1000);
					break;
				case 3:
					tabRandomColor.push("color-yellow");
					document.getElementById("color-yellow").classList.add("active");
					setTimeout(function()
					{ 
						document.getElementById("color-yellow").classList.remove("active");

					}, 1000);
					break;

			}

			setTimeout(function()
					{ 
						

					}, 1000);
			
		}
		// console.log("VERIFIACTION TABRANDOM APRES SWITCH = " + tabRandomColor[0]);

		

	}

	





	var play = document.getElementById("play");
	let gameScreen;



	var screenGameOver = function(event){
		//if (event.key == "ArrowRight"){
			let gameOver = document.getElementById('result');
			gameScreen = document.getElementById("game");
			gameScreen.classList.remove('active');
			gameOver.classList.add('active');
		// }
	}



	window.addEventListener("keydown",screenGameOver);

	var mainRedirecGame = function(){
		gameScreen = document.getElementById("game");
		let home = document.getElementById('home');
		home.classList.remove("active");
		gameScreen.classList.add("active");
		tabCases[0].remplirTableauRandom();

	}

	play.addEventListener("click",mainRedirecGame);



	/******************* OBJETS + MANIPULATION DOM ************************/

	
	// On crée un tableau dans lequel on met tout les element ayant la classe nommée color
	var carre = document.getElementsByClassName("color");
	var tabCases = [];
	// pour chaque element du tableau carre on crée un nouvel objet Case qui a comme paramètre un élément du tableau et son index dans le tableau
	for (var i = 0; i < carre.length; i++) {

		let maCase = new Case(carre[i], i);
		tabCases.push(maCase);
		
		let music = new Audio();
		music.src = "sounds/mp3/"+soundUrl[i]+".mp3";
		music.push(soundsObj);

			
	}

}

window.addEventListener("DOMContentLoaded", onReadyDom);

