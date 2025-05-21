
const urlParams = new URLSearchParams(window.location.search);
const animeName = urlParams.get('anime');

const animeDetailsSection = document.getElementById('anime-details');

const animeData = {
    naruto: {
        title: 'Naruto',
        description: 'Naruto Uzumaki-nin macəraları, ninja olmaq arzusu və dostları ilə mübarizəsi.',
        genres: ['Action', 'Adventure', 'Fantasy'],
        status: 'Completed',
        year: 2002,
        episodes: [
            { number: 1, title: 'Naruto Bölüm 1', embed: '' }
        ],
        img: 'img/naruto.jpg'
    },
    demonslayer: {
        title: 'Demon Slayer',
        description: 'Tanjiro Kamado qardaşını qorumaq və ailəsini intiqam almaq üçün iblislərlə mübarizə aparır.',
        genres: ['Action', 'Drama', 'Supernatural'],
        status: 'Ongoing',
        year: 2019,
        episodes: [
            { number: 1, title: 'Demon Slayer Bölüm 1', embed: '' }
        ],
        img: 'img/demonslayer.jpg'
    }
};

if(animeName && animeData[animeName]) {
    const anime = animeData[animeName];
    let html = `
        <img src="${anime.img}" alt="${anime.title}" style="max-width: 300px; border-radius: 8px;" />
        <h2>${anime.title}</h2>
        <p>${anime.description}</p>
        <p><strong>Janr:</strong> ${anime.genres.join(', ')}</p>
        <p><strong>Status:</strong> ${anime.status}</p>
        <p><strong>İl:</strong> ${anime.year}</p>
        <h3>Bölümlər</h3>
        <ul>
    `;
    anime.episodes.forEach(ep => {
        html += `<li><a href="watch.html?anime=${animeName}&ep=${ep.number}">${ep.title}</a></li>`;
    });
    html += '</ul>';
    animeDetailsSection.innerHTML = html;
} else {
    animeDetailsSection.innerHTML = '<p>Anime tapılmadı.</p>';
}
