window.onload = () => {
    const items = document.getElementsByClassName('present__item');

    for(let item of items) {
        let obj = document.getElementById(item.id);
        obj.addEventListener('click', getPresent);
    }

    let modal = document.querySelector('.modal');
    modal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
}

let selectMenu = gameId => {
    let games = document.getElementsByClassName('games');

    for(let item of games) {
        let obj = document.getElementById(item.id);
        obj.style.display = 'none';
    }

    let game = document.getElementById(gameId);
    game.style.display = 'flex';

}

let starbucks = {picture: 'starbucks.png', sound: 'present2.mp3'};
let temp = {picture: 'temp.jpg', sound: 'temp.mp3'};
let badBbj = {picture: 'bad_bbj.png', sound: 'bad.mp3'};
let badBj = {picture: 'bad_bj.png', sound: 'bad.mp3'};
let badBj2 = {picture: 'bad_bj2.jpg', sound: 'bad.mp3'};
let niceBbj = {picture: 'nice_bbj.png', sound: 'present1.mp3'};
let niceBbj2 = {picture: 'nice_bbj2.png', sound: 'present1.mp3'};
let niceBj = {picture: 'nice_bj.png', sound: 'present1.mp3'};
let niceBj2 = {picture: 'nice_bj2.png', sound: 'present1.mp3'};
let present1 = {picture: 'present1.jpg', sound: 'present1.mp3'};
let present2 = {picture: 'present2.jpg', sound: 'present1.mp3'};
let present3 = {picture: 'present3.jpg', sound: 'present1.mp3'};
let present4 = {picture: 'present4.jpg', sound: 'present1.mp3'};
let present5 = {picture: 'present5.jpg', sound: 'present1.mp3'};
let present6 = {picture: 'present6.jpg', sound: 'present1.mp3'};
let present7 = {picture: 'present7.jpg', sound: 'present1.mp3'};
let present8 = {picture: 'present8.jpg', sound: 'present1.mp3'};
let present9 = {picture: 'present9.jpg', sound: 'present1.mp3'};
let present10 = {picture: 'present10.jpg', sound: 'present1.mp3'};

let presents = [
    starbucks,
    starbucks,
    starbucks,
    starbucks,
    starbucks,
    starbucks,
    starbucks,
    starbucks,
    starbucks,
    starbucks,
    starbucks,
    starbucks,
    badBj,
    badBbj,
    badBj2,
    niceBj,
    niceBbj,
    niceBbj2,
    niceBbj2,
    niceBbj2,
    niceBj2,
    present1,
    present2,
    present3,
    present4,
    present5,
    present6,
    present7,
    present8,
    present9,
    present10,
    temp,
    temp,
    temp,
    temp
];

let clickCnt = 0;
let getPresent = e => { 
    clickCnt++;
    if (clickCnt == 1) setTimeout(() => {
        if (clickCnt == 1) {
            let item = document.getElementById(e.path[0].id);

            if (presents == 0) {
                alert('선물이 바닥 났어요.');
                clickCnt=0;
                return -1;
            }
            
            let ranNum = Math.floor(Math.random()*presents.length);
            let ranPresent = (presents[ranNum]);
            presents.splice(ranNum,1);

            item.removeEventListener('click', getPresent);
            item.classList.remove('present__hover');
            item.style.backgroundImage='url('+ranPresent.picture+')';
            item.style.backgroundSize='100%';
            item.style.backgroundPosition='center';
            item.textContent='';
            
            document.querySelector('.modal__img').src = ranPresent.picture;
            document.querySelector('.modal__audio').src = ranPresent.sound;
            document.querySelector('.modal').classList.remove('hidden');
            clickCnt=0;
        }
    }, 200);
    if (clickCnt >= 2) {
        let item = document.getElementById(e.path[0].id);
        
        item.removeEventListener('click', getPresent);
        item.classList.remove('present__hover');
        item.style.backgroundImage='url('+temp.picture+')';
        item.style.backgroundSize='100%'
        item.style.backgroundPosition='center';
        item.textContent='';
        
        document.querySelector('.modal__img').src = temp.picture;
        document.querySelector('.modal__audio').src = temp.sound;
        document.querySelector('.modal').classList.remove('hidden');
        clickCnt=0;
    }
}

function displayQuizImg() {
    let game2 = document.getElementById('game2');
    if (quizImages.length == 0) {
        game2.innerHTML = '<h1>연습 끝</h1>'
    } else {
        let quizImg = (quizImages[0]);
        quizImages.splice(0,1);
        game2.innerHTML = "<img src='"+quizImg+"' alt=''></img>"
        + "<button onclick='javascript:displayQuizImg()'>다음</button>";
    }
}

let quizImages = [
    'quiz1.jpeg',
    'quiz2.jpeg',
    'quiz3.jpeg',
    'quiz4.png'
];

function displayQuizMovie() {
    let game3 = document.getElementById('game3');
    game3.innerHTML = '<video controls width="1000">'+
    '<source src="quiz5.mp4" type="video/webm">'+
    '<source src="quiz5.mp4" type="video/mp4"></video>'
}