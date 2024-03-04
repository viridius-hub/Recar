const errorsContainer = document.querySelector('#errorsContainer')

console.log(errorsContainer)

if (errorsContainer) {

    const inputsEmail = document.querySelectorAll('input[type="email"]')
    const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const createError = (errorText) =>{
        const errorBlock = document.createElement('div')
        errorBlock.classList.add('errors__item')
        errorBlock.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.99935 5.83329C10.4577 5.83329 10.8327 6.20829 10.8327 6.66663V9.99996C10.8327 10.4583 10.4577 10.8333 9.99935 10.8333C9.54102 10.8333 9.16602 10.4583 9.16602 9.99996V6.66663C9.16602 6.20829 9.54102 5.83329 9.99935 5.83329ZM9.99102 1.66663C5.39102 1.66663 1.66602 5.39996 1.66602 9.99996C1.66602 14.6 5.39102 18.3333 9.99102 18.3333C14.5993 18.3333 18.3327 14.6 18.3327 9.99996C18.3327 5.39996 14.5993 1.66663 9.99102 1.66663ZM9.99935 16.6666C6.31602 16.6666 3.33268 13.6833 3.33268 9.99996C3.33268 6.31663 6.31602 3.33329 9.99935 3.33329C13.6827 3.33329 16.666 6.31663 16.666 9.99996C16.666 13.6833 13.6827 16.6666 9.99935 16.6666ZM10.8327 14.1666H9.16602V12.5H10.8327V14.1666Z" fill="#FF735D"/>
        </svg>        
        <p>${errorText}</p>
        `
        setTimeout(()=>{
            errorBlock.remove()
        }, 5000)
        setTimeout(()=>{
            errorBlock.classList.remove('errors__item_active')
        }, 4700)
        setTimeout(()=>{
            errorBlock.classList.add('errors__item_active')
        }, 300)
        errorsContainer.appendChild(errorBlock)
    }
    
    if (inputsEmail.length > 0) {
        inputsEmail.forEach(input => {
            input.addEventListener('blur', (e)=>{
                if (emailRegexp.test(e.target.value)) {
                    input.parentElement.classList.remove('field_error')
                }
                else {
                    input.parentElement.classList.add('field_error')
                    createError('Пользователь с такой почтой не зарегистрирован')
                }
            })
        })
    }
}