let gameSeq=[];
let userSeq=[];

let btns = ["red","yellow","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

let startBtn=document.getElementById("start");
startBtn.addEventListener("click",function (){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() { 
        btn.classList.remove("flash");
    },300)
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function() { 
        btn.classList.remove("userFlash");
    },250)
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level: ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn =document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("cuur level :",level);
    if(userSeq[idx]===gameSeq[idx]){
        // console.log("same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
     h2.innerHTML=`<b>Game over!!</b> Your score was : <b>${level}</b> <br> Press start button for restart.`;
     document.querySelector("body").style.backgroundColor="red";
     setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
     },150)
     reset();
    }
}

function btnPress(){
    // console.log("button was pressed");
    // console.log(this);
    if(started == true){
        let btn =this;
        userFlash(btn)
        let userColor =btn.getAttribute("id");
        userSeq.push(userColor);
        // console.log(userColor)
        checkAns(userSeq.length-1);
    }
}

let allBtns =document.querySelectorAll(".btn");
for( let btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}