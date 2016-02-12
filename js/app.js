
$(document).ready(function(){
	/*--- Create a new game on page load ---*/
  hiddenNumber = newGame();
  countNumber = 0;
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
  $('#guessButton').click(function(event){
      var userGuessNumber = $('#userGuess').val();
      event.preventDefault();
      if($.isNumeric(userGuessNumber)){
        var countNumber = parseInt($('#count').text());
        userGuess(userGuessNumber, hiddenNumber);
        increaseCountNumber(countNumber);
      }
      else{
        $('#userGuess').val('');
        alert("Please input a valid number!");
      }
  }); 
});



function newGame(){
      $('#userGuess').val('');
      $('#feedback').text('Make your Guess!');
      $('#count').text('0');
      $('li.guess').remove();
      $('#guessButton').show();
      var secretNumber = Math.floor((Math.random()*100) +1);
      return secretNumber;
    }

function userGuess(guessNumber, hiddenNumber){
      var difference = Math.abs(guessNumber - hiddenNumber);

      if (difference == 0){
        $('#feedback').text('You Won. Click new game to play again');
        $('#guessButton').hide();
      }
      else if (difference >=50){
        $('#feedback').text('Ice cold');
        $('#guessList').append('<li class="guess">' + guessNumber + '</li>');       
      }
      else if (difference >=30 && difference < 50){
        $('#feedback').text('cold');
        $('#guessList').append('<li class="guess">' + guessNumber + '</li>');
      }
      else if (difference >=20 && difference < 30){
        $('#feedback').text('warm');
        $('#guessList').append('<li class="guess">' + guessNumber + '</li>');
      }
      else if (difference >=10 && difference < 20){
        $('#feedback').text('hot');
        $('#guessList').append('<li class="guess">' + guessNumber + '</li>');
      }
      else if (difference >=1 && difference < 10){
        $('#feedback').text('very hot');
        $('#guessList').append('<li class="guess">' + guessNumber + '</li>');
      }
    }
function increaseCountNumber(countNumber){
  countNumber++;
  $('#count').text(countNumber);
}