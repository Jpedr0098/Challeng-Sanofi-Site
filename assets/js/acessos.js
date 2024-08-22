const apiUrl = 'https://sanofiapi.onrender.com/api/v1/users'; //Pegar link novo

// Função para listar todos os usuários
async function fetchUsers() {
  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    const optionSelect = document.querySelector('#userNameUpdade');
    const optionSelect2 = document.querySelector('#userNameUpdade2');
    const tableBody = document.querySelector('#usersTable tbody');
    tableBody.innerHTML = ''; // Limpa a tabela antes de atualizar

    const vazio = document.createElement('option');
    vazio.value = ``
    vazio.text =  ``
    optionSelect.appendChild(vazio)

    const vazio2 = document.createElement('option');
    vazio2.value = ``
    vazio2.text =  ``
    optionSelect2.appendChild(vazio2)

    users.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${user.USER_ID}</td><td>${user.USUARIO}</td><td>${user.NIVEL_ACESSO}</td>`;
      tableBody.appendChild(row);

      const opcao = document.createElement('option');
      opcao.value = `${user.USUARIO}`
      opcao.text =  `${user.USUARIO}`
      optionSelect.appendChild(opcao)

      const opcao2 = document.createElement('option');
      opcao2.value = `${user.USUARIO}`
      opcao2.text =  `${user.USUARIO}`
      optionSelect2.appendChild(opcao2)
    });
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
  }
}

$(document).ready(function() {
  $('#userNameUpdade').select2();
})
 $(document).ready(function() {
  $('#userNameUpdade2').select2();
})

// // Função para criar um novo usuário
// document.getElementById('createUserForm').addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const name = document.getElementById('createName').value;
//   const email = document.getElementById('createEmail').value;

//   try {
//     await fetch(apiUrl, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ name, email })
//     });
//     fetchUsers(); // Atualiza a lista após criar
//   } catch (error) {
//     console.error('Erro ao criar usuário:', error);
//   }
// });

// // Função para atualizar um usuário existente
// document.getElementById('updateUserForm').addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const id = document.getElementById('updateId').value;
//   const name = document.getElementById('updateName').value;
//   const email = document.getElementById('updateEmail').value;

//   try {
//     await fetch(`${apiUrl}/${id}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ name, email })
//     });
//     fetchUsers(); // Atualiza a lista após atualizar
//   } catch (error) {
//     console.error('Erro ao atualizar usuário:', error);
//   }
// });

// // Função para deletar um usuário
// document.getElementById('deleteUserForm').addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const id = document.getElementById('deleteId').value;

//   try {
//     await fetch(`${apiUrl}/${id}`, {
//       method: 'DELETE'
//     });
//     fetchUsers(); // Atualiza a lista após deletar
//   } catch (error) {
//     console.error('Erro ao deletar usuário:', error);
//   }
// });

// // Adiciona evento de clique no botão para atualizar a lista de usuários
// document.getElementById('fetchUsersButton').addEventListener('click', fetchUsers);

// // Atualiza a lista de usuários ao carregar a página
fetchUsers();
