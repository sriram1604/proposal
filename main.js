const target = document.querySelector(".no")
const yesBtn = document.querySelector(".hidden")
const acceptBtn = document.querySelector(".yes")

function moveTarget(){
    const maxwidth = 400;
    const minwidth = 400;

    const randomX = Math.floor(Math.random()*maxwidth);
    const randomY = Math.floor(Math.random()*minwidth);

    target.style.left = randomX +"px";
    target.style.top = randomY +"px";
}

target.addEventListener("mouseenter",function(){
    moveTarget();
    yesBtn.innerHTML = " ";
})
acceptBtn.addEventListener("click",function(){
    yesBtn.innerHTML = "I Love You tooo...<3💞😘";
})
