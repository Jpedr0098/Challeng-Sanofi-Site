const apiUrl = 'http://localhost:3000/api/users' //Pegar link novo

async function fetchUsers(usuario, senha) {
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        users.forEach(user => {
            if (usuario === user.USUARIO && senha === user.SENHA) {
                window.location.href = 'acessos.html'
            }
        })
    } catch (error) {
        alert('Usuário ou senha inválidos!')
    }
}

function erroLogin() {
    document.querySelectorAll(".input-group")
        .forEach((input) => {
            input.classList.remove("input-group")
            input.classList.add("input-group-error")
        })
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.login-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault()

        document.getElementById('loading-screen').classList.remove('hidden')

        const user = document.getElementById('user').value
        const senha = document.getElementById('senha').value
        
        erroLogin()
        fetchUsers(user, senha)

        document.getElementById('loading-screen').classList.add('hidden')

    })
})