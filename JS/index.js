const selectElement = function (element) {
    return document.querySelector(element);
}


let menuToggle = selectElement('.menu');
let body = selectElement('body');

menuToggle.addEventListener('click', function () {
    body.classList.toggle('open');
})

/*========================
boton-flecha
==========================*/ 
window.onscroll = function(){
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop >300){
        document.querySelector('.flecha')
        .classList.add('show');
    }else{
        document.querySelector('.flecha')
        .classList.remove('show');
    }
}
document.querySelector('.flecha')
.addEventListener('click', () =>{
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });
});