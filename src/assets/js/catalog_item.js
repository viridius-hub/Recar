const tabButtons = document.querySelectorAll('[data-catalog_item_open]')
const tabContents = document.querySelectorAll('[data-catalog_item_content]')

tabButtons.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        e.preventDefault()
        const currentTab = Array.from(tabContents).filter((el)=>el.dataset.catalog_item_content === item.dataset.catalog_item_open)[0]

        tabContents.forEach((content)=>{
            content.classList.remove('catalog-item-filter__content_active')
        })
        tabButtons.forEach((button)=>{
            button.classList.remove('catalog-item-filter__header__tab_active')
        })

        item.classList.add('catalog-item-filter__header__tab_active')
        if (currentTab) {
            currentTab.classList.add('catalog-item-filter__content_active')
        }
    })
})