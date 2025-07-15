import './style.css'


const app = document.querySelector<HTMLDivElement>('#app')!
// const itens = document.querySelector<HTMLDivElement>('.itens')!
// const sho = document.querySelector<HTMLImageElement>('.show-hiden-options')!
const itens = document.querySelectorAll('.itens')!
const shos = document.querySelectorAll('.show-hiden-options')!
const urlCompleta = window.location.protocol +'//' + window.location.host
const menu = document.querySelector<HTMLImageElement>('.menu')!
const ul = document.querySelector<HTMLDivElement>('ul')!
const ifro = document.querySelector<HTMLDivElement>('.logo-ifro')!
ul.classList.toggle('hide')
for(let i:number = 0; i<itens.length; i++){
    const botao = shos[i] as HTMLImageElement;
    let opcoes = itens[i]?.children.length || 0
    const filho = itens[i]?.children[opcoes-1] as HTMLDivElement;
    filho.style.display = filho.style.display === 'none' ? 'flex':'none'
    botao.src = botao.src === urlCompleta + '/public/circle-plus.svg' ?
    urlCompleta + '/public/circle-minus.svg':
    urlCompleta + '/public/circle-plus.svg';
}
for(let i:number = 0; i<itens.length; i++){
    shos[i].addEventListener('click', () =>{
    const botao = shos[i] as HTMLImageElement;
    let opcoes = itens[i]?.children.length || 0
    const filho = itens[i]?.children[opcoes-1] as HTMLDivElement;
    filho.style.display = filho.style.display === 'none' ? 'flex':'none'
    botao.src = botao.src === urlCompleta + '/public/circle-plus.svg' ?
    urlCompleta + '/public/circle-minus.svg':
    urlCompleta + '/public/circle-plus.svg';
    itens[i].classList.toggle('ativo')
    // console.log(botao.classList)
    // console.log(botao.src)
    // console.log(urlCompleta)
    })    
}
menu?.addEventListener('click', ()=>{
    // ul.style.display = ul.style.display === 'none' ? 'flex':'none'
    menu.style.opacity = '0';
    setTimeout(() =>{
    menu.src = menu.src === urlCompleta + '/public/align-justify.svg' ? 
    urlCompleta + '/public/x.svg' : urlCompleta + '/public/align-justify.svg'
    menu.style.opacity = '1';
    }, 150)
    ul.classList.toggle('hide')
    ifro.style.display = ifro.style.display === 'flex' ? 'none':'flex'
})