import './style.css'


const app = document.querySelector<HTMLDivElement>('#app')!
// const itens = document.querySelector<HTMLDivElement>('.itens')!
// const sho = document.querySelector<HTMLImageElement>('.show-hiden-options')!
const itens = document.querySelectorAll('.itens')!
const shos = document.querySelectorAll('.show-hiden-options')!
const urlCompleta = window.location.protocol +'//' + window.location.host
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