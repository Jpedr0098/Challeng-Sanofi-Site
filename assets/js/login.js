const apiUrl = 'https://sanofiapi.onrender.com/api/v1/users' //Pegar link novo

function erroLogin() {
    document.querySelectorAll(".input-group")
        .forEach((input) => {
            input.classList.remove("input-group")
            input.classList.add("input-group-error")
        })
}
/*
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.login-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault()

        const user = document.getElementById('user').value
        const senha = document.getElementById('senha').value

        fetchUsers(user, senha)
        erroLogin()
    })
})

async function fetchUsers(usuario, senha) {
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        users.forEach(user => {
            if (usuario === user.USUARIO && senha === user.SENHA) {
                window.location.href = 'teste.html'
            }
        })
    } catch (error) {
        alert('Usuário ou senha inválidos!')
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.login-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault()

        const user = document.getElementById('user').value
        const senha = document.getElementById('senha').value

        fetchUsers(user, senha)
        erroLogin()
    })
})
*/

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.login-form')

    form.addEventListener('submit', async function (event) {
        event.preventDefault()

        const user = document.getElementById('user').value
        const senha = document.getElementById('senha').value

        try {
            // Faz a requisição POST para a rota de autenticação
            const response = await fetch('http://localhost:3000/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }), // Envia os dados como JSON
            })
        } catch (error) {
            console.error('Erro ao autenticar:', error);
        }
        erroLogin()
    })
})

async function valida_login(user, senha) {
    try {
        await fetch(apiUrl+"/login", {
          method: 'POST',
          headers: {'Content-Type': 'application/json',},
          body: JSON.stringify({ user, senha })
        })

        window.location.href = 'teste.html'

      } catch (error) {
        console.error('Erro ao logar:', error)
      }
}

