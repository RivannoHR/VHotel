let navbarItemsA = document.querySelectorAll('.navbar .navbar-items a');
navbarItemsA.forEach(item => {
  item.addEventListener('mouseenter', function() {
    this.style.color = 'var(--color-10)'; 
  });
  
  item.addEventListener('mouseleave', function() {
          this.style.color = 'var(--color-60)'; 
  });
});

let burger = document.getElementById('phone-menu');
var navbarItems = document.querySelector('.navbar .navbar-items');
burger.addEventListener('click', function(){
navbarItems.classList.toggle('headLess');
});

let spa = document.getElementById('spa');
let gym = document.getElementById('gym');
let pool = document.getElementById('luxurious-suite');
function checkOverflow() {
    
    if (spa.scrollWidth > spa.clientWidth){
      spa.style.flexDirection = 'column';
      spa.style.alignItems = 'center';
  
      gym.style.flexDirection = 'column';
      gym.style.alignItems = 'center';
  
      pool.style.flexDirection = 'column';
      pool.style.alignItems = 'center';
    }else{
      spa.style.flexDirection = 'row';
      spa.style.alignItems = 'initial';
  
      gym.style.flexDirection = 'row';
      gym.style.alignItems = 'initial';
  
      pool.style.flexDirection = 'row';
      pool.style.alignItems = 'initial';
    }
    
  }
  
  checkOverflow();
  window.addEventListener('resize', checkOverflow);