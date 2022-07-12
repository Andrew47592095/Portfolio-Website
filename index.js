const animation_text = document.getElementById('animation_text');
const projects = document.querySelectorAll('.project-img-container');
const project_text_container = document.querySelectorAll('.project-text-container');
const menu_wrapper = document.getElementById('menu-wrapper');
const bar = document.querySelectorAll('.bar');
const grid = document.querySelectorAll('.grid');
const text_array = ["Self-Taught Developer.","Optimist.","Coffee Addict"]
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if(count === text_array.length) {
    count = 0;
  }
  currentText = text_array[count];
  letter = currentText.slice(0, ++index);

  animation_text.textContent = letter;
  if(letter.length === currentText.length) {
    setTimeout(function() {
      count++;
      index = -1;
    },1000)
  }
  setTimeout(type,250);
}());

window.addEventListener('scroll',() => {
  for(let i = 0; i < projects.length;i++) {
    let windowheight = window.innerHeight;
    let revealtop = projects[i].getBoundingClientRect().top;
    let revealpoint = 159;

    if(revealtop < windowheight - revealpoint) {
      projects[i].classList.add('left');
      project_text_container[i].classList.add('right');
    } else {
      projects[i].classList.remove('left');
      project_text_container[i].classList.remove('right');

    }
  }
})

window.addEventListener('scroll',() => {
  for(let k = 0; k < grid.length; k++) {
    let windowheight = window.innerHeight;
    let revealtop = grid[k].getBoundingClientRect().top;
    let revealpoint = 159;
    
    if(revealtop < windowheight - revealpoint) {
      grid[k].classList.add('left');
      grid[k].classList.add('right');
      grid[k].classList.add('bottom');
    } else {
      grid[k].classList.remove('left');
      grid[k].classList.remove('right');
      grid[k].classList.remove('bottom');
    }
  }
})

menu_wrapper.addEventListener('click',() => {
  for(let k = 0; k < bar.length; k++) {
    bar[k].classList.toggle('active');
  }
  document.querySelector('.menu-inside').classList.toggle('show');
})
