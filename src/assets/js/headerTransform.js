const headerEl = document.querySelector("#header");

if (headerEl) {
    window.addEventListener('scroll', (e)=>{
        if (window.scrollY > 0) {
            headerEl.classList.add('header_fixed')
        }
        else{
            headerEl.classList.remove('header_fixed')
        }
    }, {passive: true})
}