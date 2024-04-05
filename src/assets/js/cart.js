window.addEventListener("DOMContentLoaded", () => {
    const checkbox_all = document.querySelector('#checkbox_all')
    checkbox_all && checkbox_all.addEventListener("change", (e) => {
        const checkboxes = document.querySelectorAll('.js-checkbox-cart > input')

        if(e.target.checked) {
            checkboxes.forEach((checkbox) => {
                checkbox.checked = true
            })
        } else {
            checkboxes.forEach((checkbox) => {
                checkbox.checked = false
            })
        }
    })
})