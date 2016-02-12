
$(document).ready(function(){
	/*--- Create a new game on page load ---*/
  
	/*--- Create a new game when the user press the New Game button---*/
	$('.new').click(function(){
		hiddenNumber = newGame();
    countNumber = 0;
	});
	
	/*--- Display information modal box ---*/
  $(".what").click(function(){
   	$(".overlay").fadeIn(1000);
 	});

 	/*--- Hide information modal box ---*/
 	$("a.close").click(function(){
 		$(".overlay").fadeOut(1000);
 	});
  	
  /*--- Make a new guess ---*/
  $('#guessButton').click(function(){
      var userGuessNumber = parseInt($('#userGuess').val());
      alert('guess: ' + userGuessNumber + ' hidden: ' + hiddenNumber);
      var countNumber = parseInt($('#count').text());
      alert(countNumber);
      userGuess(userGuessNumber, hiddenNumber);
      increaseCountNumber(countNumber);
  }); 
});



function newGame(){
      $('#userGuess').val('');
      var secretNumber = Math.floor((Math.random()*100) +1);
      return secretNumber;
    }

function userGuess(guessNumber, hiddenNumber){
      var difference = Math.abs(guessNumber - hiddenNumber);
      alert(difference);

      if (difference == 0){
        $('#feedback').text('You Won. Click new game to play again');
      }
      else if (difference >=50){
        $('#feedback').text('Ice cold');
        $('#guessList').append('<li>' + guessNumber + '</li>');       
      }
      else if (difference >=30 && difference < 50){
        $('#feedback').text('cold');
        $('#guessList').append('<li>' + guessNumber + '</li>');
      }
      else if (difference >=20 && difference < 30){
        $('#feedback').text('warm');
        $('#guessList').append('<li>' + guessNumber + '</li>');
      }
      else if (difference >=10 && difference < 20){
        $('#feedback').text('hot');
        $('#guessList').append('<li>' + guessNumber + '</li>');
      }
      else if (difference >=1 && difference < 10){
        $('#feedback').text('very hot');
        $('#guessList').append('<li>' + guessNumber + '</li>');
      }
    }
function increaseCountNumber(countNumber){
  countNumber++;
  $('#count').text(countNumber);
}