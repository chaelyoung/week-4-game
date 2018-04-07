// set random numbers //
$( document ).ready(function(){
    var Random = Math.floor(Math.random()*101+19)
    $("#randomNumber").text(Random);

    var red = Math.floor(Math.random()*11+1)
    var blue = Math.floor(Math.random()*11+1)  
    var green = Math.floor(Math.random()*11+1)  
    var yellow = Math.floor(Math.random()*11+1)

    // set variables //
    var totalScore = 0;
    var wins = 0;
    var losses = 0;

// resets game //
$("#numberWins").text(wins);
$("#numberLosses").text(losses);

function reset(){
    Random=Math.floor(Math.random()*101+19);
    $("randomNumber").text(Random);
    red= Math.floor(Math.random()*11+1);
    blue= Math.floor(Math.random()*11+1);
    green= Math.floor(Math.random()*11+1);
    yellow= Math.floor(Math.random()*11+1);
    playerTotal = 0;
    $("totalScore").text(playerTotal);
    }

// wins and losses //
function winner(){
    alert("Congrats, you won!");
    wins++;
    $("numberWins").text(wins);
    reset();
}

function loser(){
    alert("Sorry, you lose. Try again!");
    losses++;
    $("#numberLosses").text(losses);
    reset()
}

// clicks //

    $("#redder").click(function() {
        playerTotal = playerTotal + red;
        $("#totalScore").text(playerTotal);
            if (playerTotal == Random){
                winner();
            }
            else if ( playerTotal > Random){
                loser();
            }
    });

    $("#bluer").click(function() {
        playerTotal = playerTotal + blue;
        $("#totalScore").text(playerTotal);
            if (playerTotal == Random){
                winner();
            }
            else if ( playerTotal > Random){
                loser();
            }
    });

    $("#greener").click(function() {
        playerTotal = playerTotal + green;
        $("#totalScore").text(playerTotal);
            if (playerTotal == Random){
                winner();
            }
            else if ( playerTotal > Random){
                loser();
            }
    });

    $("#yellower").click(function() {
        playerTotal = playerTotal + yellow;
        $("#totalScore").text(playerTotal);
            if (playerTotal == Random){
                winner();
            }
            else if ( playerTotal > Random){
                loser();
            }
    });
});