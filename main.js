let bokImage = document.querySelector('main>img');
let texts = document.querySelectorAll('main>p');
console.log(bokImage);

setTimeout(function(){
    bokImage.classList.remove('animation-image-move');
    bokImage.classList.add('animation-image-open');
    texts.forEach(text=>text.classList.add('animation-text'));
    
},1500);