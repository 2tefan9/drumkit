var button=document.querySelectorAll(".drum");
for (var i = 0; i < button.length; i++)
{
    button[i].addEventListener("click", handleButton);
}

function handleButton(){
    var squarebutton=this.innerHTML;
    onkeydown(squarebutton);
    buttonAnimation(squarebutton);
}


document.addEventListener("keydown", function(event)
{
    onkeydown(event.key);
    buttonAnimation(event.key);
});

function onkeydown(keyPress)
{
    switch(keyPress)
    {
        case "w": var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a": var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s": var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d": var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j": var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k": var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l": var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;


    }
}

function buttonAnimation(keyPress){
   var activeButton= document.querySelector("."+keyPress);
   activeButton.classList.add("pressed");
   setTimeout(function()
   {
       activeButton.classList.remove("pressed");
   },100)
}


