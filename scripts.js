//typing effect start
const TypeWriter = function(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 20);
    this.type();
    this.isDeleting = false;
}

//Type Method
TypeWriter.prototype.type = function() {
// current index of word
   const current = this.wordIndex % this.words.length;
   //Get full text of current word
   const fullTxt = this.words[current];

//check if deleting
if(this.isDeleting) {
    //remove char
    this.txt = fullTxt.substring(0,this.txt.length - 1);
} else {
    //add char
    this.txt = fullTxt.substring(0,this.txt.length + 1);
}

// insert txt into element
this.txtElement.innerHTML =`<span class="txt">${this.txt}</span>`;

//type speed
let typeSpeed = 300;

if(this.isDeleting) {
    this.typeSpeed /= 2;
}

//if word is complete
if(! this.isDeleting && this.txt === fullTxt) {
    //make type speed at end 
    typeSpeed = this.wait;
    //set deleting to true
    this.isDeleting = true;
} else if(this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    //move to next word
    this.wordIndex++;
    //pause
    typeSpeed = 500;
}
 setTimeout(() => this.type(), typeSpeed)
}
//Init in dom load
document.addEventListener('DOMContentLoaded', init);

//Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    //init typewriter
    new  TypeWriter(txtElement, words, wait);
}
///typing effect finsish

//constant=============
//sticky navbar
const menu = document.querySelector(".menu-list");
const navbar = document.querySelector(".navbarr");
//responsive nav bar constants
const menuBtn = document.querySelector(".menu-btn");
const cancleBtn = document.querySelector(".cancle-btn");



//responsive navbar
menuBtn.onclick = ()=>{
    menu.classList.add('active');
    menuBtn.classList.add('hide');
}
cancleBtn.onclick = ()=>{
    menu.classList.remove('active');
    menuBtn.classList.remove('hide');
}
//sticky navbar
window.onscroll = ()=>{
    this.scrollY > 20 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
}


/////
