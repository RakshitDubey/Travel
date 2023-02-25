window.addEventListener('scroll',()=>{
    const navbar=document.getElementById('navbar');

    if(window.scrollY>0){
        navbar.classList.add('sticky');
    }
    if(window.scrollY<=0){
        navbar.classList.remove('sticky');
    }

})

const navilist=document.getElementById('navilist');
const menu=document.getElementById('menu');

menu.addEventListener('click',()=>{
    navilist.classList.toggle('active')
})
