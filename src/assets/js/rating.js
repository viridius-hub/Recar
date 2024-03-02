const ratingEls = document.querySelectorAll('[data-rating]')

ratingEls.forEach((block) => {
    const stars = block.querySelectorAll('button');

    stars.forEach((star, index) => {
        star.addEventListener('mouseover', (e) => {
            for (let i = 0; i <= index; i++) {
                stars[i].classList.add('rating__star_active');
            }
            for (let i = index + 1; i < stars.length; i++) {
                stars[i].classList.remove('rating__star_active');
            }
        });

        block.addEventListener('mouseleave', (e) => {
            stars.forEach((star, i) => {
                star.classList.remove('rating__star_active');
            });
        });

        star.addEventListener('click', (e) => {
            console.log('Выбран рейтинг:', index + 1);
        });
    });
});