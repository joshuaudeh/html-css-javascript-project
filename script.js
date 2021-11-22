let paragraph = document.querySelector('.first');
console.log(paragraph);

let para = document.querySelector('.second');
console.log(paragraph);

let project = document.querySelector(".first-program") ;
console.log(project);

let secondImg = document.querySelector('.second-img');
console.log(secondImg)




paragraph.addEventListener('click', () => {
    project.classList.toggle('first-program');
})


para.addEventListener('click', () => {
    secondImg.classList.toggle('second-img');
})


// function showInfo() {
//     projects.classList.toggle('first-program');
// }

// paragraphs.addEventListener('click', showInfo);


