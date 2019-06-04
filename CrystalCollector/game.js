$(document).ready(function(){
    var rando = (Math.floor(Math.random()*120)+21);
    $("#scoreMatch").text(rando);

    var num1 = (Math.floor(Math.random()*12)+1);
    var num2 = (Math.floor(Math.random()*12)+1);
    var num3 = (Math.floor(Math.random()*12)+1);
    var num4 = (Math.floor(Math.random()*12)+1);

    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    $("#wins").text(wins);
    $("#losses").text(losses);

    function resetGame(){
        rando = (Math.floor(Math.random()*120)+21);
        console.log(rando)
        $("#scoreMatch").text(rando);
        num1 = (Math.floor(Math.random()*12)+1);
        num2 = (Math.floor(Math.random()*12)+1);
        num3 = (Math.floor(Math.random()*12)+1);
        num4 = (Math.floor(Math.random()*12)+1);
        totalScore = 0;
        $("#score").text(totalScore);
    }

    function winner(){
        alert("You win!");
        wins++;
        $("#wins").text(wins);
        resetGame();
    }

    function loser(){
        alert("Sorry, you lose! Try again!");
        losses++;
        $("#losses").text(losses);
        resetGame();
    }

    $("#ruby").click(function(){
        totalScore = totalScore + num1;
        console.log(totalScore);
        $("#score").text(totalScore);
        if(totalScore === rando){
            winner();
        }
        else if(totalScore > rando){
            loser();
        }
    });

    $("#emerald").click(function(){
        totalScore = totalScore + num2;
        console.log(totalScore);
        $("#score").text(totalScore);
        if(totalScore === rando){
            winner();
        }
        else if(totalScore > rando){
            loser();
        }
    });

    $("#sapphire").click(function(){
        totalScore = totalScore + num3;
        console.log(totalScore);
        $("#score").text(totalScore);
        if(totalScore === rando){
            winner();
        }
        else if(totalScore > rando){
            loser();
        }
    });

    $("#quartz").click(function(){
        totalScore = totalScore + num4;
        console.log(totalScore);
        $("#score").text(totalScore);
        if(totalScore === rando){
            winner();
        }
        else if(totalScore > rando){
            loser();
        }
    });
});