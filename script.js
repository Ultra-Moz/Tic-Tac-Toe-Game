let turn = "Player 1 (X)"
const buttons = document.querySelectorAll(".btn")
const afterMatch = document.querySelector(".after-match")
const Result = document.querySelector(".resultText")
const playerTurn = document.querySelector(".actual-turn")
const reset = document.querySelector(".reset")
let resultWinner = "No One";




btn1Text = buttons[0].textContent;
btn2Text = buttons[1].textContent;
btn3Text = buttons[2].textContent;
btn4Text = buttons[3].textContent;
btn5Text = buttons[4].textContent;
btn6Text = buttons[5].textContent;
btn7Text = buttons[6].textContent;
btn8Text = buttons[7].textContent;
btn9Text = buttons[8].textContent;


const gameOver = function (winner) {
    console.log(winner)
    afterMatch.classList.add("show-after-match")
    Result.textContent = winner
    buttons.forEach(function(button){
        button.setAttribute("disabled", "")
        button.classList.add("disabled-button")
    })
}

const checkWinner = function () {
    
    // Player 1 Check

    if (btn1Text == "X" && btn2Text == "X" && btn3Text == "X"){
        resultWinner = "Player1"
        gameOver("Player 1 Wins")
    }       // Vertical

    else if(btn4Text == "X" && btn5Text == "X" && btn6Text == "X"){
        resultWinner = "Player1"
        gameOver("Player 1 Wins")
    }     // Vertical

    else if(btn7Text == "X" && btn8Text == "X" && btn9Text == "X"){
        resultWinner = "Player1"
        gameOver("Player 1 Wins")
    }     // Vertical

    else if(btn1Text == "X" && btn4Text == "X" && btn7Text == "X"){
        resultWinner = "Player1"
        gameOver("Player 1 Wins")
    }     // Horizontal

    else if(btn2Text == "X" && btn5Text == "X" && btn8Text == "X"){
        resultWinner = "Player1"
        gameOver("Player 1 Wins")
    }     // Horizontal

    else if(btn3Text == "X" && btn6Text == "X" && btn9Text == "X"){
        resultWinner = "Player1"
        gameOver("Player 1 Wins")
    }     // Horizontal

    else if(btn1Text == "X" && btn5Text == "X" && btn9Text == "X"){
        resultWinner = "Player1"
        gameOver("Player 1 Wins")
    }    // Diagonal  

    else if(btn3Text == "X" && btn5Text == "X" && btn7Text == "X"){
        resultWinner = "Player1"
        gameOver("Player 1 Wins")
    }    // Diagonal


    // Player 2 Check

    else if (btn1Text == "O" && btn2Text == "O" && btn3Text == "O"){
        resultWinner = "Player2"
        gameOver("Player 2 Wins")
    }     // Vertical
           
    else if(btn4Text == "O" && btn5Text == "O" && btn6Text == "O"){
        resultWinner = "Player2"
        gameOver("Player 2 Wins")
    }      // Vertical

    else if(btn7Text == "O" && btn8Text == "O" && btn9Text == "O"){
        resultWinner = "Player2"
        gameOver("Player 2 Wins")
    }      // Vertical

    else if( btn1Text == "O" && btn4Text == "O" && btn7Text == "O" ){
        resultWinner = "Player2"
        gameOver("Player 2 Wins")
    }     // Horizontal

    else if(btn2Text == "O" && btn5Text == "O" && btn8Text == "O"){
        resultWinner = "Player2"
        gameOver("Player 2 Wins")
    }      // Horizontal

    else if(btn3Text == "O" && btn6Text == "O" && btn9Text == "O"){
        resultWinner = "Player2"
        gameOver("Player 2 Wins")
    }      // Horizontal

    else if( btn1Text == "O" && btn5Text == "O" && btn9Text == "O"){
        resultWinner = "Player2"
        gameOver("Player 2 Wins")
    }      // Diagonal  

    else if(btn3Text == "O" && btn5Text == "O" && btn7Text == "O"){
        resultWinner = "Player2"
        gameOver("Player 2 Wins")
    }       // Diagonal


    // Draw Check
    if ((buttons[0].disabled && buttons[1].disabled && buttons[2].disabled && buttons[3].disabled && buttons[4].disabled && buttons[5].disabled && buttons[6].disabled && buttons[7].disabled && buttons[8].disabled) == true) {

        if (resultWinner == "No One") {
            gameOver("It's a Draw")
        }

    }

}

reset.addEventListener('click', function(){
    location.reload()
})

buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {

        this.setAttribute("disabled", "")
        this.classList.add("disabled-button")

        if (turn === "Player 1 (X)") {
            this.textContent = "X"
            turn = "Player 2 (O)"
        }
        else {
            this.textContent = "O"
            turn = "Player 1 (X)"
        }
        playerTurn.textContent = `${turn}` ;  

        btn1Text = buttons[0].textContent
        btn2Text = buttons[1].textContent
        btn3Text = buttons[2].textContent
        btn4Text = buttons[3].textContent
        btn5Text = buttons[4].textContent
        btn6Text = buttons[5].textContent
        btn7Text = buttons[6].textContent
        btn8Text = buttons[7].textContent
        btn9Text = buttons[8].textContent

        checkWinner()

    })
})
