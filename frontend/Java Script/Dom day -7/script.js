let main =document.querySelector('#main');
let img =document.querySelector('h1')

main.addEventListener('mousemove',function(dets){
    // console.log(dets.x)

    img.style.left =dets.x +'px';
    img.style.top =dets.y +'px';

})