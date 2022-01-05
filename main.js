let bokImage = document.querySelector('main>img');
let texts = document.querySelectorAll('main>p');
let newYearImage = document.querySelector('header>img');

setTimeout(function(){
    bokImage.classList.remove('animation-image-move');
    bokImage.classList.add('animation-image-open');
    texts.forEach(text=>text.classList.add('animation-text'));
    newYearImage.classList.add('animation-image');
},1500);