const tabButtons = document.querySelectorAll('[data-catalog_open]')
const tabContents = document.querySelectorAll('[data-catalog_content]')
const catalogContent = document.querySelectorAll('[data-catalog_content_block]')

const catalogDropdowns = document.querySelectorAll('[data-catalog_dropdown]')

const catalogMore = document.querySelectorAll("[data-catalog_table_more]")

tabButtons.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        e.preventDefault()
        const currentTab = Array.from(tabContents).filter((el)=>el.dataset.catalog_content === item.dataset.catalog_open)[0]
        const currentContent = Array.from(catalogContent).filter((el)=>el.dataset.catalog_content_block === item.dataset.catalog_open)[0]

        tabContents.forEach((content)=>{
            content.classList.remove('catalog-filter__content_active')
        })
        tabButtons.forEach((button)=>{
            button.classList.remove('catalog-filter__header__tab_active')
        })
        catalogContent.forEach((block)=>{
            block.removeAttribute('data-catalog_content_visible')
        })

        item.classList.add('catalog-filter__header__tab_active')
        if (currentContent) {
            currentContent.dataset.catalog_content_visible = 'true'
        }
        if (currentTab) {
            currentTab.classList.add('catalog-filter__content_active')
        }
    })
})

catalogDropdowns.forEach((dropdown)=>{
    dropdown.querySelector('button').addEventListener('click', (e)=>{
        e.preventDefault()
        dropdown.classList.toggle('catalog-filter__content__dropdown_open')
    })
})

catalogMore.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        e.preventDefault()

        item.parentElement.querySelector("[data-catalog_table_content]").classList.toggle('catalog-content_group__item__table__content_open')
        item.classList.toggle('catalog-content_group__item__table__more_open')

        if (item.classList.contains('catalog-content_group__item__table__more_open')) {
            item.querySelector('p').innerHTML = 'Свернуть'
        }
        else item.querySelector('p').innerHTML = 'Остальные детали узла'
    })
})