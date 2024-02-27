import Swiper, {Navigation, Autoplay} from 'swiper';

import "./fields"
import "./select"

window.addEventListener("DOMContentLoaded", () => {
    new Swiper('.home-banner', {
        modules: [Navigation, Autoplay],
        autoplay: {
            delay: 4000
        },
        spaceBetween: 26,
        navigation: {
            nextEl: '.home-banner__next',
            prevEl: '.home-banner__prev',
        },
    });


    const customSelects = document.querySelectorAll('.select-box')
    for (let i = 0; i < customSelects.length; i++) {
        const select = customSelects[i]

        const checkboxEl = select.querySelector('input[type="checkbox"]')
        const radioEls = select.querySelectorAll('input[type="radio"]')
        const valueEl = select.querySelector('.select-box__value')
        if (checkboxEl) {
            checkboxEl.addEventListener('change', (e) => {
                let val = undefined

                for (let j = 0; j < radioEls.length; j++) {
                    const radioEl = radioEls[j]
                    if (radioEl.checked) {
                        val = radioEl.value
                    }
                }

                if (!val) {
                    val = 'Авто из гаража'
                }

                if (valueEl) {
                    if (checkboxEl.checked) {
                        valueEl.textContent = "Скрыть авто"
                    } else {
                        valueEl.textContent = val
                    }
                }
            })
        }
    }
})