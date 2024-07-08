window.addEventListener("DOMContentLoaded", () => {
    const tabHeaderItemEls = document.querySelectorAll(".tabs-header__item");
    const tabContentItemEls = document.querySelectorAll(".tabs-content__item");

    tabHeaderItemEls.forEach(tabHeaderItemEl => {
        tabHeaderItemEl.addEventListener("click", (event) => {
            event.preventDefault();

            const id = tabHeaderItemEl.dataset.tab
            const group = tabHeaderItemEl.dataset.group

            if(id && group) {
                const headers = document.querySelectorAll(`.tabs-header__item[data-group="${group}"]`)
                const contents = document.querySelectorAll(`.tabs-content__item[data-group="${group}"]`)
                headers.forEach(header => {
                    header.classList.remove("tabs-header__item--active")
                })
                contents.forEach(content => {
                    content.classList.remove("tabs-content__item--active")
                })
            }

            const tabContentEl = document.getElementById(id)
            if(tabContentEl) {
                tabContentEl.classList.add('tabs-content__item--active')
            }

            tabHeaderItemEl.classList.add("tabs-header__item--active");
        })
    })
})