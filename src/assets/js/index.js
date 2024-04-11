import Swiper, {Autoplay, EffectFade, Navigation} from 'swiper';
import Isotope from "isotope-layout"

import "./fields"
import "./select"
import "./headerTransform"
import "./modal"
import "./rating"
import "./catalog"
import "./catalog_item"
import "./catalog_item_select"
import "./forms"
import "./cart"

window.addEventListener("DOMContentLoaded", () => {
    const tables = document.querySelectorAll('.js-filter-order')
    tables.forEach(table => {
        const iso = new Isotope(table, {
            itemSelector: '.orders__row',
            getSortData: {
                date: '.filter-date',
                status: '.filter-status',
            }
        });

        const buttonDateEl = document.querySelector('.orders__button-date')
        const buttonStatusEl = document.querySelector('.orders__button-status')
        let reverseDate = true
        let reverseStatus = true

        buttonDateEl && buttonDateEl.addEventListener('click', () => {
            reverseDate = !reverseDate
            iso.arrange({ sortBy: 'date', sortAscending: reverseDate });
        })

        buttonStatusEl && buttonStatusEl.addEventListener('click', () => {
            reverseStatus = !reverseStatus
            iso.arrange({ sortBy: 'status', sortAscending: reverseStatus });
        })
    })

    const navBarButtonEls = document.querySelectorAll('.nav-bar-menu')
    navBarButtonEls.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            button.classList.toggle('nav-bar-menu--active')
        })
    })

    new Swiper('.home-banner', {
        modules: [Navigation, Autoplay, EffectFade],
        loop: true,
        autoplay: {
            delay: 4000
        },
        spaceBetween: 26,
        navigation: {
            nextEl: '.home-banner__next',
            prevEl: '.home-banner__prev',
        },
        effect: 'fade'
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