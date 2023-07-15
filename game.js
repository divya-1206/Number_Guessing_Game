var randomNum = Math.round(Math.random()*100);
var live=10;
function submit(){
    var input=document.getElementById("inp").value;
    live--;
    console.log(input,randomNum);
    if(input==randomNum){
        location.href="./win.html";
    }
    else if(input<randomNum && live!=0){
        document.getElementById("ans").innerHTML="<b><center>Oops,Your Guess is Low</center></b>";
    }
    else if(input>randomNum && live!=0){
        document.getElementById("ans").innerHTML="<b><center>Oops,Your Guess is High</b></center>";
    }
    else if(live==0){
        location.href="./lose.html";
    }
    document.getElementById("liv").innerHTML="Remaining Lives: "+live;
}
function again(){
    location.href="./index.html";
}