const loginInfo = JSON.parse(localStorage.getItem("login")) || []
const acessos = [
    {
    acesso: '1',
    links: '/pag_manutencao.html',
    imagem: '/assets/images/ponto_icon.png',
    imagemAlt: '',
    namePage: 'Bater ponto'
    },
    {
    acesso: '2',
    links: '/pag_manutencao.html',
    imagem: '/assets/images/dashboard_icon.png',
    imagemAlt: '',
    namePage: 'Dashboard'
    },
    {
    acesso: '3',
    links: '/pag_manutencao.html',
    imagem: '/assets/images/cadastrar_icon.png',
    imagemAlt: '',
    namePage: 'Castrar remédio'
    },
    {
    acesso: '4',
    links: '/pag_manutencao.html',
    imagem: '/assets/images/controle-mala_icon.png',
    imagemAlt: '',
    namePage: 'Controle de Malas'
    },
    {
    acesso: '5',
    links: '/pag_manutencao.html',
    imagem: '/assets/images/analise-desempenho_icon.png',
    imagemAlt: '',
    namePage: 'Analise de desempenho'
    }
]

const configAcesso = {
    links: '/acessos.html',
    imagem: '/assets/images/ponto_icon.png',
    imagemAlt: '',
    namePage: 'Configurar Acessos'
}

loginInfo.forEach(login => { 
    let nivel = login.acess

    if (nivel == 'master'){
        acessos.forEach(cardInfo => {
            card(cardInfo)
        })
        card(configAcesso)
    } else {

        let niveis = nivel.split(",")
        console.log(niveis)

        acessos.forEach(cardInfo => {
            if (niveis.includes(cardInfo.acesso)){
                card(cardInfo)
            }
        })
    }
})

function card(cardInfo){
    const cardTarefa = `
    <div class="card">
        <a href=${cardInfo.links}>
            <img src=${cardInfo.imagem} alt=${cardInfo.imagemAlt}>
            <p>${cardInfo.namePage}</p>
        </a>
    </div>
    `
    const card = document.createElement("div")
    card.class = 'card'
    card.innerHTML = cardTarefa
    document.querySelector("#OptionSystem").appendChild(card)
}