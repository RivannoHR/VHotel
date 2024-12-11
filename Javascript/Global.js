var head = document.querySelector('.head');
var navbar = document.querySelector('.navbar');
var navbarItems = document.querySelector('.navbar .navbar-items');
var phoneMenu = document.querySelector('#phone-menu');
function toggleNavbar() {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  var headHeight = head.offsetHeight;
  if(navbarItems.classList.contains('phone')){
    let navbarItemsHeight =navbarItems.offsetHeight;
    let navbarItemsPhone = document.querySelector('.navbar .navbar-items.phone');
    if (scrollPosition >= headHeight) {
      navbar.classList.add('scrolled'); 
      phoneMenu.style.color='var(--color-10)';
    }else{
      navbar.classList.remove('scrolled'); 
      phoneMenu.style.color='var(--color-30)';
    }
    if(scrollPosition >= headHeight-navbarItemsHeight){
      navbarItemsPhone.classList.add('filled');
    }else{
      navbarItemsPhone.classList.remove('filled');
    }
  }
  else {
    if (scrollPosition >= headHeight) {
      navbar.classList.add('scrolled'); 
      phoneMenu.style.color='var(--color-60)';
    }else{
      navbar.classList.remove('scrolled'); 
      phoneMenu.style.color='var(--color-60)';
    }
    
  }

}
window.addEventListener('scroll', toggleNavbar);
window.addEventListener('resize', toggleNavbar);
let navbarItemsA = document.querySelectorAll('.navbar .navbar-items a');
navbarItemsA.forEach(item => {
  item.addEventListener('mouseenter', function() {
    this.style.color = 'var(--color-10)'; 
  });
  
  item.addEventListener('mouseleave', function() {
          this.style.color = 'var(--color-60)'; 
  });
});
function toggleColor(){
  if(navbar.classList.contains('scrolled')){
    if (navbarItems.classList.contains('phone')) {
      phoneMenu.style.color = 'var(--color-10)';
    } else {
      phoneMenu.style.color = 'var(--color-60)';
    }
  }else{
    if (navbarItems.classList.contains('phone')) {
      phoneMenu.style.color = 'var(--color-30)';
    } else {
      phoneMenu.style.color = 'var(--color-60)';
    }
    
  }
}
phoneMenu.addEventListener('click', function() {
  navbarItems.classList.toggle('phone');
  toggleColor();
});
document.addEventListener('click',function(e){
  if(!phoneMenu.contains(e.target) && !navbarItems.contains(e.target)){
    navbarItems.classList.remove('phone');
  }  
  toggleColor();
})
function togglePhoneClass() {
  if (getComputedStyle(phoneMenu).display === 'none') {
    navbarItems.classList.remove('phone');
    toggleColor();
  }
}
togglePhoneClass();
const resizeObserver = new ResizeObserver(togglePhoneClass);
resizeObserver.observe(phoneMenu);