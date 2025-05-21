
const searchBox = document.getElementById('searchBox');
const animeCards = document.querySelectorAll('.anime-card');

searchBox.addEventListener('input', () => {
    const query = searchBox.value.toLowerCase();
    animeCards.forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();
        if(name.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
