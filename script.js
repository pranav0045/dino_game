
//javascript for dino game.
let v;
let over=false;

document.onkeydown=function(e)
{
    console.log("key code is ",e.keyCode);
    if(e.keyCode==38)
    {
        dino=document.querySelector('.dino');
        console.log(dino);
        dino.classList.add('animate-dino');

        setTimeout(() => {
            dino.classList.remove('animate-dino');
         }, 700);


    }
}

 let score=0;
   let sc= setInterval(() => {
        score++;
        score_container=document.querySelector('.score-container');
        score_container.innerHTML=`Your Score : ${score}`;
        
    }, 300);


//collision detection
let m;
m=setInterval(() => {
    
    dino=document.querySelector('.dino');
    gameover=document.querySelector('.game-over');
    obs=document.querySelector('.obstacle');
    
    //dino position value
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('bottom'));
    
    //obstacle position value
    
    ox=parseInt(window.getComputedStyle(obs,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obs,null).getPropertyValue('bottom'));
    
    offsetx=Math.abs(dx-ox);
    offsety=Math.abs(dy-oy);
    
    if(offsetx<260 && offsety<50)
    {

        setTimeout(() => {
            
            gameover.style.visibility="visible";
        }, 800);
        obs.classList.remove('animate-obstacle');
        dino.classList.add('destroy');
        clearInterval(sc)

       khatam();
    }

    
    
}, 100);

function khatam()
{
    clearInterval(m);
    setTimeout(() => {
        let v=confirm("game over play again");
        if(v){
            location.reload();
        }      
         
        
    }, 1000);
  
    
}







