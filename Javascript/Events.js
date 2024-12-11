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

let jomblo = document.getElementById('jomblo');

function checkOverflow() {
    
    if (jomblo.scrollWidth > jomblo.clientWidth){
      jomblo.style.flexDirection = 'column';
      jomblo.style.alignItems = 'center';

    }else{
      jomblo.style.flexDirection = 'row';
      jomblo.style.alignItems = 'initial';
  
    }
    
  }
  
  checkOverflow();
  window.addEventListener('resize', checkOverflow);