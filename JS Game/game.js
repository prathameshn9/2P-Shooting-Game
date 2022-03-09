var s = 0;
var playera = 0;
var playerb = 0;

function clk() {
    s += 1;
    gs()
    if (s > 5) {
        reset();
    }
}

function reset() {
    s = 0;
    playera = 0;
    playerb = 0;
    document.getElementById('p1').innerHTML = '';
    document.getElementById('p2').innerHTML = '';
    document.getElementById('p3').innerHTML = '';
}

function gs() {
    var player1 = 100;
    var player2 = 100;
    if (playera == 3 || playerb == 3) {
        reset();
    }
    else {
        if (s <= 5) {
            while (player1 >= 0 || player2 >= 0) {
                e = Math.floor(Math.random() * 6);
                f = Math.floor(Math.random() * 6);
                player1 -= e;
                player2 -= f;
                if (player1 <= 0) {
                    playerb += 1;
                    break;
                }
                if (player2 <= 0) {
                    playera += 1;
                    break;
                }
            }
            player1 = 100;
            player2 = 100;
            if (playera == 3) {
                document.getElementById("p1").innerHTML = "Player 1-won" + ": " + playera;
                return document.getElementById("p3").innerHTML = "Player 1 won the match! ";
            }
            if (playerb == 3) {
                document.getElementById("p2").innerHTML = "Player 2-won" + ": " + playerb;
                return document.getElementById("p3").innerHTML = "Player 2 won the match! ";
            }
            document.getElementById("p1").innerHTML = "Player 1-won" + ": " + playera;
            document.getElementById("p2").innerHTML = "Player 2-won" + ": " + playerb;
        }
    }

}





