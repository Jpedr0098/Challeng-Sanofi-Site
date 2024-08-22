document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', function () {

            const url = card.getAttribute('data-url');

            window.location.href = url;
        });
    });
});

document.querySelector("#exitWorkSpace").addEventListener("click", () => {
    const loginInfo = []
    localStorage.setItem("login", JSON.stringify(loginInfo))
})