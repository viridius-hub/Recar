const selectRatings = document.querySelectorAll('[data-catalog_select_rating]')

const catalogDropdowns = document.querySelectorAll('[data-catalog_select_dropdown]')

catalogDropdowns.forEach((dropdown)=>{
    dropdown.querySelector('button').addEventListener('click', (e)=>{
        e.preventDefault()
        dropdown.classList.toggle('catalog-select-filter__content__dropdown_open')
    })
})

selectRatings.forEach((item)=>{
    item.parentElement.addEventListener('click', (e)=>{
        if (item.checked) {
            selectRatings.forEach((target)=>{
                target.parentElement.classList.remove('catalog-select-filter__content__dropdown__select__item_rating_active');
            })
            item.parentElement.classList.add('catalog-select-filter__content__dropdown__select__item_rating_active');
        }
        else item.parentElement.classList.remove('catalog-select-filter__content__dropdown__select__item_rating_active');
    })
})