// Sample news data (you would fetch this from a server or API in a real application)
const newsData = {
    'Breaking News': ['Article 1', 'Article 2', 'Article 3'],
    'Local News': ['Article 4', 'Article 5', 'Article 6'],
    'Crime': ['Article 7', 'Article 8'],
    'Government': ['Article 9', 'Article 10', 'Article 11'],
    'Education': ['Article 12', 'Article 13'],
};

function displayNews(category, articles) {
    const articlesContainer = document.getElementById(`${category.toLowerCase().replace(' ', '-')}-articles`);
    articles.forEach((article, index) => {
        const articleElement = document.createElement('div');
        articleElement.className = 'article';
        articleElement.textContent = `${index + 1}. ${article}`;
        articlesContainer.appendChild(articleElement);
    });
}

for (const category in newsData) {
    displayNews(category, newsData[category]);
}
