let search= document.getElementById('search');
let search_icon= document.getElementById('search_icon');

search_icon.addEventListener('click',()=>{
    search.classList.toggle('search_input');
})

let cato_bx=document.getElementById('cato_bx');
let left_scroll= document.getElementById('left_scroll');
let right_scroll= document.getElementById('right_scroll');

left_scroll.addEventListener('click', ()=>{
 cato_bx.scroll_left-= 100;
})

right_scroll.addEventListener('click', ()=>{
    cato_bx.scroll_left+= 100;
   })