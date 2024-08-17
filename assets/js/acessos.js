const apiUrl = 'http://localhost:3000/api/users'; //Pegar link novo


// Função para listar todos os usuários
async function fetchUsers() {
  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    const tableBody = document.querySelector('#usersTable tbody');
    tableBody.innerHTML = ''; // Limpa a tabela antes de atualizar

    users.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${user.USER_ID}</td><td>${user.USUARIO}</td><td>${user.NIVEL_ACESSO}</td>`;
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
  }
}

// Função para criar um novo usuário
document.getElementById('createUserForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('createName').value;
  const email = document.getElementById('createEmail').value;

  try {
    await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    });
    fetchUsers(); // Atualiza a lista após criar
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
  }
});

// Função para atualizar um usuário existente
document.getElementById('updateUserForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = document.getElementById('updateId').value;
  const name = document.getElementById('updateName').value;
  const email = document.getElementById('updateEmail').value;

  try {
    await fetch(`${apiUrl}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    });
    fetchUsers(); // Atualiza a lista após atualizar
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
  }
});

// Função para deletar um usuário
document.getElementById('deleteUserForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = document.getElementById('deleteId').value;

  try {
    await fetch(`${apiUrl}/${id}`, {
      method: 'DELETE'
    });
    fetchUsers(); // Atualiza a lista após deletar
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
  }
});

// Adiciona evento de clique no botão para atualizar a lista de usuários
document.getElementById('fetchUsersButton').addEventListener('click', fetchUsers);

// Atualiza a lista de usuários ao carregar a página
fetchUsers();
