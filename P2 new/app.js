const closedFace=document.querySelector('.closed')
const openFace=document.querySelector('.open')
const hearFace=document.querySelector('.hear')
const speakFace=document.querySelector('.speak')

closedFace.addEventListener('click',() => {
    if(hearFace.classList.contains('hear')
    , openFace.classList.contains('open')){
        hearFace.classList.add('active') ;
        closedFace.classList.remove('active'),
        openFace.classList.remove('active');
    }
})

hearFace.addEventListener('click', ()=>{
    if(closedFace.classList.contains('closed')){
        speakFace.classList.add('active');
         hearFace.classList.remove('active');
    }
})


speakFace.addEventListener('click',() =>{
    if(closedFace.classList.contains('closed')){
        openFace.classList.add('active');
         speakFace.classList.remove('active');
    }
})


openFace.addEventListener('click',() => {
    if(closedFace.classList.contains('closed')){
        closedFace.classList.add('active');
        openFace.classList.remove('active');
    }
})