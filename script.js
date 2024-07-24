const categories = ['工作', '生活', '別人的事'];
const topics = {
    '工作': ['主管不ok的故事', '又被同事雷', '第一次跟同事下班後聚餐'],
    '生活': ['又跟朋友混到隔天早上', '富二代爽阿', '想在脆上發的第一篇文'],
    '別人的事': ['關於我的上一任對象', '關於那些我不能放感情的人', '發現那位我只追蹤不聯繫的朋友，她/他最近…']
};

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateTopic() {
    const category = getRandomItem(categories);
    const topic = getRandomItem(topics[category]);
    document.getElementById('category').innerText = category;
    document.getElementById('topic').innerText = topic;
}