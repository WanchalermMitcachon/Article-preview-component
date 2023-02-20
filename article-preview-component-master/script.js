
const shareBtn=document.getElementById('shareBtn')
const popupBtn=document.querySelector('.popup')


shareBtn.addEventListener('click', ()=>{
    popupBtn.classList.toggle('active')
})