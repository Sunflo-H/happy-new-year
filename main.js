const add = document.querySelector('.add');
const del = document.querySelector('.del');
const header = document.querySelector('header');
const img = header.querySelector('img');
add.addEventListener('click',animation);
del.addEventListener('click',delAnimation);
function animation(){
    img.classList.add('animation');
    console.log('실행');
}

function delAnimation(){
    img.classList.remove('animation');
    console.log('실행');
}