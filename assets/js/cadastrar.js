document.addEventListener('DOMContentLoaded', function () {
    function generateId() {
        return 'remedio-' + Date.now();
    }

    const form = document.getElementById('registerForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = {
            id: generateId(),
            nomeEmpresa: document.getElementById('nomeEmpresa').value,
            nomeRemedio: document.getElementById('nome').value,
            dataEntrega: document.getElementById('delivery-date').value || null, // Convertendo para data ou null se estiver vazio
            numeroCaixas: parseInt(document.getElementById('box-number').value) || null
        };

        let formIsValid = true;

        const nomeEmpresaInput = document.getElementById('nomeEmpresa');
        const nomeRemedioInput = document.getElementById('nome');
        const dataEntregaInput = document.getElementById('delivery-date');
        const numeroCaixasInput = document.getElementById('box-number');

        if (nomeEmpresaInput.value.trim() === '' || nomeEmpresaInput.value.includes('.') || nomeEmpresaInput.value.includes('!') || nomeEmpresaInput.value.includes('*') || nomeEmpresaInput.value.includes('$') || nomeEmpresaInput.value.includes('&')) {
            document.getElementById('empresaError').textContent = `O nome da empresa não pode estar vazio. Também não pode conter os caracteres . ! * $ &`;
            formIsValid = false;
        } else {
            document.getElementById('empresaError').textContent = '';
        }

        if (nomeRemedioInput.value.trim() === '' || nomeRemedioInput.value.includes('.') || nomeRemedioInput.value.includes('!') || nomeRemedioInput.value.includes('*') || nomeRemedioInput.value.includes('$') || nomeRemedioInput.value.includes('&')) {
            document.getElementById('nomeError').textContent = `O nome do remédio não pode estar vazio. Também não pode conter os caracteres . ! * $ &`;
            formIsValid = false;
        } else {
            document.getElementById('nomeError').textContent = '';
        }

        if (formData.dataEntrega === null) { // Verifica se a data de entrega é null (vazio)
            document.getElementById('dateError').textContent = `A data de entrega não pode estar vazia.`;
            formIsValid = false;
        } else {
            document.getElementById('dateError').textContent = '';
        }

        if (formData.numeroCaixas === null) {
            document.getElementById('boxError').textContent = `O número de caixas não pode estar vazio.`;
            formIsValid = false;
        } else {
            document.getElementById('boxError').textContent = '';
        }

        if (formIsValid) {
            localStorage.setItem(formData.id, JSON.stringify(formData));

            form.reset();

            alert(`Informações cadastradas com sucesso!`);
        }
    });
});