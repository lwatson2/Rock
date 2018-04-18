			let results = "";
			let score = ""
			let pScore = 0
			let cScore = 0
			let round = 0
			const rock = document.getElementById('rock')
			const paper = document.getElementById('paper')
			const scissors = document.getElementById('scissors')
			

			rock.addEventListener('click', playerChoice)
			paper.addEventListener('click', playerChoice)
			scissors.addEventListener('click', playerChoice)

				function computerPlay(){
			let items = ['rock', 'paper', 'scissors']
			
			let computerSelection = items[Math.floor(Math.random()* items.length)]
			
			return computerSelection
		} 

			function playerChoice(){
			
			playerSelection = this.id

			let compSelect = computerPlay();
					console.log(compSelect)
					result(playerSelection,compSelect)
				}


			function result(playerSelection, computerSelection){
				round++
				if(playerSelection === "rock" && computerSelection === "paper" ||
					playerSelection === "paper" && computerSelection ==="scissors" ||
					playerSelection === "scissors" && computerSelection === "rock"){
					 results = "You lose! Computer chose " + computerSelection
					+ " while you chose " + playerSelection
					document.getElementById('results').innerHTML = results
					cScore++
				}
				else if(playerSelection === "rock" && computerSelection === "scissors"
					|| playerSelection === "paper" && computerSelection === "rock" ||
					playerSelection === "scissors" && computerSelection === "paper"){
					results = "You win! You chose " + playerSelection + " while the computer chose " +
					computerSelection 
					document.getElementById('results').innerHTML = results
					pScore++
				}
				else {
					results = "Its a draw! You both chose " + playerSelection
					document.getElementById('results').innerHTML = results
				}
					score = "Player has " + pScore + "Computer has " + cScore
					document.getElementById('score').innerHTML=score
			}

			function game(){

			while(round < 5){}

				if(cScore > pScore){
					score = "You lost! The computer had " +cScore + " while you had"
					+ pScore 
				document.getElementById('score').innerHTML= score
				}
				else if (pScore > cScore){
					score = "You win! You had " + pScore + " while the computer had" 
					+ cScore
					document.getElementById("score").innerHTML = score
				}
				else {
					score = "It's a draw!"
					document.getElementById("score").innerHTML = score
				}
			
		}
		game()
conso

			


			

			

			