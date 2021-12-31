const add = document.querySelector('.add');
const del = document.querySelector('.del');
const header = document.querySelector('header');
add.addEventListener('click',animation);
del.addEventListener('click',delAnimation);
function animation(){
    header.classList.add('animation');
    console.log('실행');
}

function delAnimation(){
    header.classList.remove('animation');
    console.log('실행');
}