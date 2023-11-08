var container = document.querySelector(".container")

var loveReact = document.querySelector("i")

container.addEventListener('dblclick', function(){
    loveReact.style.transform = 'translate(-50%, -50%) scale(1)';
    loveReact.style.opacity = '0.8';

    // setTimeout(function(){
        
    // }, 1000);

    setTimeout(function(){
        loveReact.style.opacity = '0';
        loveReact.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 1000);
})

