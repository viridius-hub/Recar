const fieldsPasswordEls = document.querySelectorAll('.field--password')

for (let i = 0; i < fieldsPasswordEls.length; i++) {
    const fieldEl = fieldsPasswordEls[i]
    const buttonEl = fieldEl.querySelector('.field__password-hide')
    const inputEl = fieldEl.querySelector('input')

    console.log(buttonEl)

    if(buttonEl && inputEl) {
        let isShow = true
        buttonEl.addEventListener('click', (e) => {
            e.preventDefault()

            isShow = !isShow

            if(isShow) {
                buttonEl.classList.remove('visible')
                inputEl.setAttribute('type', 'password')
            } else {
                buttonEl.classList.add('visible')
                inputEl.setAttribute('type', 'text')
            }
        })
    }
}