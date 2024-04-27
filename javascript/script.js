let botao = document.querySelector('.menuShow')

let seta_navegacao = document.querySelectorAll('.seta-navegacao')
const faqsProntos = document.querySelectorAll('.faqs-pronto');
// let swiperr = document.querySelector('.swiper')
const el = document.querySelector('#text')

const text = 'A experiência de tecnologia perfeita!'
const interval = 150;


botao.addEventListener('click',()=>{
    let x = document.querySelector('.menuShow1')
    let menuMobile = document.querySelector('.mobile-menu')
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
    }else{
        menuMobile.classList.add('open')
    
    }

    botao.classList.add('close')
    if(botao.classList.contains('close')){
        botao.style.display = "none"
        x.style.display ="block"
    }

    x.addEventListener("click",()=>{
        if(x.style.display = "block"){
            botao.style.display = "block"
            x.style.display ="none"
            menuMobile.classList.remove('open')
        }
    })
})



faqsProntos.forEach(faqsPronto => {
    const setaNavegacao = faqsPronto.querySelector('.seta-navegacao');
    const none = faqsPronto.querySelector('.none');

    setaNavegacao.addEventListener('click', () => {
        if (none) {
            none.classList.toggle('none');
            if(setaNavegacao.src.includes ('imagens/setas-para-baixo.png')){
                setaNavegacao.src = 'imagens/setas-para-cima.png';
            }else{
                setaNavegacao.src = 'imagens/setas-para-baixo.png';
            }
          
        } 
    });
});











