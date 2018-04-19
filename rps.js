			let results = "";
			let score = ""
			let pScore = 0
			let cScore = 0
			let choice = ""
			let final = ""
			const rock = document.getElementById('rock')
			const paper = document.getElementById('paper')
			const scissors = document.getElementById('scissors')
			const newGame = document.getElementById('newGame')

			
			rock.addEventListener('click', result)
			paper.addEventListener('click', result)
			scissors.addEventListener('click',result)
			newGame.addEventListener('click', () => resetGame())

				function getRandomInt(min, max) {
				  return Math.floor(Math.random() * (max - min + 1)) + min;
				}

				function computerPlay(){
				const arr = ["Rock", "Paper", "Scissors"];

				return arr[getRandomInt(0,2)]
		} 
			
			
			

			function result(){
				
				const playerSelection = this.id
				const computerSelection = computerPlay().toLowerCase()

				if(playerSelection === "rock" && computerSelection === "paper" ||
					playerSelection === "paper" && computerSelection ==="scissors" ||
					playerSelection === "scissors" && computerSelection === "rock"){
					 results = "You lose! Computer chose " + computerSelection
					+ " while you chose " + playerSelection 
					document.getElementById('results').innerHTML = results
					cScore = +cScore + 1
				}
				else if(playerSelection === "rock" && computerSelection === "scissors"
					|| playerSelection === "paper" && computerSelection === "rock" ||
					playerSelection === "scissors" && computerSelection === "paper"){
					results = "You win! You chose " + playerSelection + " while the computer chose " +
					computerSelection 
					document.getElementById('results').innerHTML = results
					pScore = +pScore + 1
					
				}
				else {
					results = "Its a draw! You both chose " + playerSelection
					document.getElementById('results').innerHTML = results
				}
					score = "Player has " + pScore + "Computer has " + cScore
					document.getElementById('score').innerHTML=score
			
				let final = document.getElementById("final")
				if(pScore === 5){
					final.innerHTML = "You won" 
					document.getElementById('newGame').style.visibility = 'visible';
				}

				if(cScore === 5){
					final.innerHTML = "You lost"
					document.getElementById('newGame').style.visibility = 'visible';
				}
				
			}

				function resetGame(){
					pScore = 0
					cScore = 0 
					document.getElementById('newGame').style.visibility = 'hidden';
				}
			
			

			

			