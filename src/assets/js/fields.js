const fieldsPasswordEls = document.querySelectorAll('.field--password')

for (let i = 0; i < fieldsPasswordEls.length; i++) {
    const fieldEl = fieldsPasswordEls[i]
    const buttonEl = fieldEl.querySelector('.field__password-hide')
    const inputEl = fieldEl.querySelector('input')

    if(buttonEl && inputEl) {
        let isShow = true
        buttonEl.addEventListener('click', (e) => {
            e.preventDefault()

            isShow = !isShow

            if(isShow) {
                inputEl.setAttribute('type', 'password')
            } else {
                inputEl.setAttribute('type', 'text')
            }
        })
    }
}