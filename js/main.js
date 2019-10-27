const IMAGES =
    ['images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
    'images/8.jpg',
    'images/9.jpg',
    'images/10.jpg',
    'images/11.jpg',
    'images/12.jpg']

document.addEventListener('DOMContentLoaded', function (event){
    initImages();
});

function initImages() {
    IMAGES.forEach(function (img){
        let newLi = document.createElement('li');
        newLi.innerHTML = '<img src="' + img+ '" style="width: 100%">';
        document.getElementById('img-box').appendChild(newLi);
    })
}