const sportsData = {
    'High School Sports': ['Article 1', 'Article 2', 'Article 3'],
    'Local Sports': ['Article 4', 'Article 5', 'Article 6'],
};

function displaySports(category, articles) {
    const articlesContainer = document.getElementById(`${category.toLowerCase().replace(' ', '-')}-articles`);
    articles.forEach((article, index) => {
        const articleElement = document.createElement('div');
        articleElement.className = 'article';
        articleElement.textContent = `${index + 1}. ${article}`;
        articlesContainer.appendChild(articleElement);
    });
}

for (const category in sportsData) {
    displaySports(category, sportsData[category]);
}
