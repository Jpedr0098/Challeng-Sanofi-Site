const apiUrl = 'https://sanofiapi.onrender.com/api/v2/users' //Pegar link novo

async function fetchUsers(usuario, senha) {
    valida = 0
    try {
        const response = await fetch(`${apiUrl}/${usuario}`);
        const users = await response.json();

        if (usuario === users.USUARIO && senha === users.SENHA) {
            let login = {
                id: users.USER_ID,
                acess: users.NIVEL_ACESSO,
                newAcess: users.NOVO_ACESSO
            }
            const loginInfo = []
            loginInfo.push(login)
            localStorage.setItem("login", JSON.stringify(loginInfo))

            window.location.href = 'home.html'
            valida = 1
        }
    } catch (error) {
        alert("User ou senha invalidos!")
    } finally {
        return valida
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

    form.addEventListener('submit', async function (event) {
        event.preventDefault()

        document.getElementById('loading-screen').classList.remove('hidden')

        const user = document.getElementById('user').value
        const senha = document.getElementById('senha').value

        erroLogin()
        let invalid = await fetchUsers(user, senha)
        if (invalid == 0) {
            document.getElementById('loading-screen').classList.add('hidden')
        }
    })
})