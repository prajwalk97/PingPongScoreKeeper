// 
const p1Button=document.querySelector("#p1Button");
const p2Button=document.querySelector("#p2Button");
const p1Display=document.querySelector("#p1Score");
const p2Display=document.querySelector("#p2Score");
const resetButton=document.querySelector("#reset");
const winningScoreSelect=document.querySelector("#scoreSelect");
let p1Score=0;
let winningScore=5;
let p2Score=0;
let arePlaying=true;
winningScoreSelect.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    reset();
})
p1Button.addEventListener('click',() => {
    if(arePlaying){
        p1Score++;
        p1Display.textContent=p1Score;
    }
    if(p1Score==winningScore){
        arePlaying=false;
        p1Display.classList.add('has-text-success');
        p2Display.classList.add('has-text-danger');
    }
})

p2Button.addEventListener('click',() => {
    if(arePlaying){
        p2Score++;
        p2Display.textContent=p2Score;
    }
    if(p2Score==winningScore){
        arePlaying=false;
        p2Display.classList.add('has-text-c');
        p1Display.classList.add('has-text-danger');
    }
})

resetButton.addEventListener('click',reset);

function reset(){
    arePlaying=true;
    p1Score=0;
    p2Score=0;
    p2Display.textContent=p2Score;
    p1Display.textContent=p1Score;
    p2Display.classList.remove('has-text-c','has-text-danger');
    p1Display.classList.remove('has-text-c','has-text-danger');
}

