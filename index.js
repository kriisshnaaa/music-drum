for(var i=0;i<document.querySelectorAll(".drum").length ;i++){
document.querySelectorAll(".drum")[i].addEventListener( "click",function click(){

switch (this.innerHTML) {
    case "w":
        var audio= new Audio('./tom-1.mp3');
        audio.play();
        break;
    case "a":
        var audio= new Audio('./crash.mp3');
        audio.play();
        break;
    case "s":
        var audio= new Audio('./kick-bass.mp3');
        audio.play();
        break;
    case "d":
        var audio= new Audio('./snare.mp3');
        audio.play();
        break;
    case "j":
        var audio= new Audio('./tom-2.mp3');
        audio.play();
        break;
    case "k":
        var audio= new Audio('./tom-3.mp3');
        audio.play();
        break;
    case "l":
        var audio= new Audio('./tom-4.mp3');
        audio.play();
        break;
    default:
        alert("press a button!");
        break;
}
var activeKey= document.querySelector("."+this.innerHTML);
activeKey.classList.add("pressed");
setTimeout(function(){activeKey.classList.remove("pressed")},100);
});}

document.addEventListener( "keydown",function key(e){

switch (e.key) {
    case "w":
        var audio= new Audio('./sounds/tom-1.mp3');
        audio.play();
        break;
    case "a":
        var audio= new Audio('./sounds/crash.mp3');
        audio.play();
        break;
    case "s":
        var audio= new Audio('./sounds/kick-bass.mp3');
        audio.play();
        break;
    case "d":
        var audio= new Audio('./sounds/snare.mp3');
        audio.play();
        break;
    case "j":
        var audio= new Audio('./sounds/tom-2.mp3');
        audio.play();
        break;
    case "k":
        var audio= new Audio('./sounds/tom-3.mp3');
        audio.play();
        break;
    case "l":
        var audio= new Audio('./sounds/tom-4.mp3');
        audio.play();
        break;
    default:
        break;
}
var activeKey= document.querySelector("."+e.key);
activeKey.classList.add("pressed");
setTimeout(function(){activeKey.classList.remove("pressed")},100);
});


