
const urlParams = new URLSearchParams(window.location.search);
const animeName = urlParams.get('anime');
const episodeNumber = urlParams.get('ep');

const watchPlayerSection = document.getElementById('watch-player');

const animeData = {
    naruto: {
        episodes: [
            { number: 1, title: 'Naruto Bölüm 1' }
        ]
    },
    demonslayer: {
        episodes: [
            { number: 1, title: 'Demon Slayer Bölüm 1' }
        ]
    }
};

if(animeName && episodeNumber && animeData[animeName]) {
    const anime = animeData[animeName];
    const epNum = parseInt(episodeNumber, 10);
    const currentIndex = anime.episodes.findIndex(ep => ep.number === epNum);

    let html = `
        <div class="player-box">
            <p>İzləyirsiniz: ${animeName.charAt(0).toUpperCase() + animeName.slice(1)} - Bölüm ${epNum} (Demo, embed link yoxdur)</p>
        </div>
        <nav>
    `;
    if(currentIndex > 0) {
        html += `<a href="watch.html?anime=${animeName}&ep=${anime.episodes[currentIndex-1].number}">Əvvəlki Bölüm</a> | `;
    } else {
        html += `<span style="color: #555;">Əvvəlki Bölüm</span> | `;
    }
    html += `<a href="index.html">Ana Səhifə</a> | `;
    if(currentIndex < anime.episodes.length - 1) {
        html += `<a href="watch.html?anime=${animeName}&ep=${anime.episodes[currentIndex+1].number}">Növbəti Bölüm</a>`;
    } else {
        html += `<span style="color: #555;">Növbəti Bölüm</span>`;
    }
    html += `</nav>`;
    watchPlayerSection.innerHTML = html;
} else {
    watchPlayerSection.innerHTML = '<p>Anime və ya bölüm tapılmadı.</p>';
}
