document.addEventListener('DOMContentLoaded', function() {
    const masterRadio = document.getElementById('masterRadio')
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')

    masterRadio.addEventListener('change', function() {
        if (masterRadio.checked) {
            checkboxes.forEach(function(checkbox) {
                checkbox.disabled = true
                checkbox.checked = false // Desmarca os checkboxes
            })
        }
    })

    document.getElementById('restritoRadio').addEventListener('change', function() {
        checkboxes.forEach(function(checkbox) {
            checkbox.disabled = false; // Reativa os checkboxes
        })
    })
})