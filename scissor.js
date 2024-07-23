let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const gencomputerchoice = ( )=>{
    const options = [ "rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
};

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const drawgame = () =>{
    console.log("Game was draw.");
    msg.innerText = "Game was Draw.";
    msg.style.backgroundColor = "rgb(33, 28, 28)";
};

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin)
        {
            userscore++
            msg.innerText = `You win! Your ${userchoice} beats ${compchoice}.`;
            msg.style.backgroundColor = "green";
            userscorepara.innerText = userscore;
            
        }
        else{
            compscore++;
            msg.innerText = `You lose! ${compchoice} beats your ${userchoice}.`;
            
            msg.style.backgroundColor = "red";
            compscorepara.innerText = compscore;
        }
};

const playgame = (userchoice)=>{
    console.log("user choice= ", userchoice);
    const compchoice = gencomputerchoice();
    console.log("comp choice= ", compchoice);

    if(userchoice == compchoice)
        {

            drawgame();
        }
    else
    {
        let userwin = true;
        if(userchoice==="rock"){
            userwin = compchoice==="paper"?false:true;
        } else if(userchoice==="paper"){
            compchoice==="scissors"?false:true;
        }else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})
