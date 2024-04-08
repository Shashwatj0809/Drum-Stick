var numBtn=document.querySelectorAll(".drum").length;
console.log(numBtn);
for(i=0;i<numBtn;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var BtnInnerHTML=this.textContent;
        console.log(BtnInnerHTML);
        makesSound(BtnInnerHTML);

    })
    document.addEventListener("keypress",function(){
        makesSound(key);
    })
    function makesSound(key){
        switch(key){
            case "A":
                var carsh=new Audio("sounds/crash.mp3");
                carsh.play();
                break;
            case "S":
                var kick=new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            case "W":
                var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "D":
                var snare=new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "J":
                var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "K":
                var tom2=new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "L":
                var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            default:
                console.log(new Error("WRONG CHOICE"));
                break
        }               
    }
}