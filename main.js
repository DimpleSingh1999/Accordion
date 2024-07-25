const accordions = document.querySelectorAll('.accordion');


accordions.forEach(accordion => {
    const icon = document.querySelector('.icon');
    const answer = document.querySelector('.answer');

    accordion.addEventListener('click', () => {
        icon.classList.toggle('active');
        answer.classList.toggle('active');
    })
})