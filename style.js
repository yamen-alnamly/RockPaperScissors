let score =  JSON.parse(localStorage.getItem('score'));
if (!score)
{
    score = {
        wins : 0 ,
        losses : 0,
        ties: 0
    };
}
function PickComputerMove() {
    const randomNumber = Math.random()
    let computerMove = ''

    if
        (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    } else if
        (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    }
    else if
        (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissors';

    }
    console.log(computerMove);
    return computerMove;
}
PickComputerMove();

function MatchResult(Move) {
    const computerMove = PickComputerMove();
    let result = '';
    if (Move === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tied';
        }
        else if (computerMove === 'Paper') {
            result = 'Lose';
        }
        else if (computerMove === 'Scissors') {
            result = 'WIN';
        }
    }
    else if (Move === 'Paper') {
        if (computerMove === 'Paper') {
            result = 'Tied';
        }
        else if (computerMove === 'Scissors') {
            result = 'Lose';
        }
        else if (computerMove === 'Rock') {
            result = 'WIN';
        }
    }
    else if (Move === 'Scissors') {
        if (computerMove === 'Scissors') {
            result = 'Tied';
        }
        else if (computerMove === 'Rock') {
            result = 'Lose';
        }
        else if (computerMove === 'Paper') {
            result = 'WIN';
        }
    }
    if (result === 'WIN')
    {
        score.wins += 1;
    }
    else if (result === 'Lose')
    {
        score.losses += 1;
    }
    else if (result === 'Tied')
    {
        score.ties += 1;
    }
    localStorage.setItem('score', JSON.stringify(score));
    alert(`you picked ${Move}, the computer picked ${computerMove} , you ${result}
Wins: ${score.wins} , Losses: ${score.losses} , ties: ${score.ties}`);

}
function ResetScore(){
    score.ties = 0;
    score.losses = 0;
    score.wins = 0;
    localStorage.removeItem('score');
   
    alert(`The score has been reset
Wins: ${score.wins} , Losses: ${score.losses} , ties: ${score.ties}`); 
}