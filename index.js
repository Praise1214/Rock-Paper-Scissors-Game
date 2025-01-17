let scores = (JSON.parse(localStorage.getItem('scores')) || {
    wins: 0,
    losses: 0,
    ties: 0,
  })
  


  function playGame(playerMove){

      const computerMove = pickComputerMove();  //caled the computermove function 

      let result = '';

      if (playerMove === 'scissors'){
          if (ComputerMove === 'rock'){
              result = 'lose';
          }
          else if (ComputerMove === 'paper') {
              result = 'win'
          }
          else if (ComputerMove === 'scissors') {
              result = 'tie'
          };
      }

      else if (playerMove === 'paper') {
          if (ComputerMove === 'rock'){
                      result = 'win';
          }
          else if (ComputerMove === 'paper') {
              result = 'tie'
          }
          else if (ComputerMove === 'scissors') {
            result = 'lose'
                  };
              }

      else if (playerMove === 'rock') {
          if (ComputerMove === 'rock'){
              result = 'tie';
          }
          else if (ComputerMove === 'paper') {
              result = 'lose'
          }
          else if (ComputerMove === 'scissors') {
              result = 'win'
          };

      }

      if (result === 'win') {
      scores.wins += 1;
      }

      else if (result === 'lose') {
          scores.losses += 1;
      }

      else if (result === 'tie') {
          scores.ties += 1;
      }

     

      localStorage.setItem('scores', JSON.stringify(scores));

      updateScoreElement();

      document.querySelector('.Js-result').innerHTML = `Olasubomi ${result}`;

      document.querySelector('.Js-moves').innerHTML = `Olasubomi <img src="images/${playerMove}-emoji.png" class="move-icon"> <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`

      

  }

   
  function pickComputerMove() {
     
      let computerMove = ''
      const randomNumber = Math.random();

      if (randomNumber > 0 && randomNumber < 1/3 ){
          ComputerMove ='rock';
      }

      else if (randomNumber > 1/3 && randomNumber < 2/3){
          ComputerMove = 'paper';
      }

      else if (randomNumber > 2/3 && randomNumber < 1) {
          ComputerMove = 'scissors';
      }
      return ComputerMove;   //returns the computer move globally
      }

  function updateScoreElement() {
          document.querySelector('.Js-score').innerHTML = `Wins : ${scores.wins}, Losses : ${scores.losses}, Ties : ${scores.ties}`
      }