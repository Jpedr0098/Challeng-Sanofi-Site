document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', function () {
            // Obter o URL personalizado do card clicado
            const url = card.getAttribute('data-url');
            
            // Redirecionar para o URL correspondente
            window.location.href = url;
        });
    });
});

document.querySelector("#exitWorkSpace").addEventListener("click", () => {
    const loginInfo = []
    localStorage.setItem("login", JSON.stringify(loginInfo))
})