// For Swiper.js

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 32,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// For Color Circle Select

const changeBorderColor = (element) => {
    const selectedCircle = element.parentNode.querySelector('.selected-circle');
    if (selectedCircle) {
        selectedCircle.classList.remove('selected-circle');
    }
    element.classList.add('selected-circle');
};

const colorCircleContainers = document.querySelectorAll('.swiper-slide');
colorCircleContainers.forEach(container => {
    const colorCircles = container.querySelectorAll('.swiper-circle');
    colorCircles.forEach(circle => {
        circle.addEventListener('click', () => {
            if (!circle.classList.contains('selected-circle')) {
                const selectedCircle = container.querySelector('.selected-circle');
                if (selectedCircle) {
                    selectedCircle.classList.remove('selected-circle');
                }
                circle.classList.add('selected-circle');
            }
        });
    });

    const initialSelectedCircle = container.querySelector('.swiper-circle:first-child');
    changeBorderColor(initialSelectedCircle);
});