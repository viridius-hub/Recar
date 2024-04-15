const fieldsSelects = document.querySelectorAll('[data-select]')

for (let i = 0; i < fieldsSelects.length; i++) {
    const fieldEl = fieldsSelects[i]
    const fieldOptionsWrapper = fieldEl.parentElement.querySelector('[data-select-options]')

    if (fieldOptionsWrapper) {
        let isOpen = false

        const options = fieldOptionsWrapper.querySelectorAll('[data-select-option]')

        options.forEach(option => {
            option.addEventListener('click', (e) => {
                fieldEl.value = e.currentTarget.textContent
                fieldEl.classList.remove('select__input_active')
            })
        })

        fieldEl.setAttribute('readonly', "true")

        fieldEl.addEventListener('click', (e) => {
            e.preventDefault()
            isOpen = !isOpen
            fieldOptionsWrapper.style.display = isOpen ? 'flex' : 'none'
            if (isOpen) {
                fieldEl.classList.add('select__input_active')
            } else {
                fieldEl.classList.remove('select__input_active')
            }
        })
    }
}

// console.log(fieldsSelects)
