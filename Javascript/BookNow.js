var navbar = document.querySelector('.navbar');
var head = document.querySelector('.head');
var navbarItems = document.querySelector('.navbar .navbar-items');
var navbarItemsHeight =navbarItems.offsetHeight;
var phoneMenu = document.querySelector('#phone-menu');

function toggleNavbar() {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  var navHeight = navbar.offsetHeight;
  var headHeight = head.offsetHeight;
  if(navbarItems.classList.contains('phone')){
    let navbarItemsPhone = document.querySelector('.navbar .navbar-items.phone');
    if (scrollPosition >= navHeight-navbarItemsHeight) {
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
    if (scrollPosition >= navHeight-navbarItemsHeight) {
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
  navbarItems.classList.toggle('headLess');
  toggleColor();
});
document.addEventListener('click',function(e){
  if(!phoneMenu.contains(e.target) && !navbarItems.contains(e.target)){
    navbarItems.classList.remove('headLess');
  }  
  toggleColor();
})
function togglePhoneClass() {
  if (getComputedStyle(phoneMenu).display === 'none') {
    navbarItems.classList.remove('headLess');
    toggleColor();
  }
}
togglePhoneClass();
const resizeObserver = new ResizeObserver(togglePhoneClass);
resizeObserver.observe(phoneMenu);
var radioButtons = document.querySelectorAll('input[type="radio"][name="roomChoice"]');
document.addEventListener('DOMContentLoaded', function() {
  

  
  
  radioButtons.forEach(function(radioButton) {
    radioButton.checked = false;
  });
});
function validate(){
  let bookingForm = document.getElementById('Booking');
  var nameError = document.getElementById('errorFullName');
  var emailError = document.getElementById('errorEmail');
  var phoneNumError = document.getElementById('errorPhoneNumber');
  let bookDateError = document.getElementById('errorBookDate');
  
  bookDateError.classList.remove('active');
  nameError.classList.remove('active');
  emailError.classList.remove('active');
  phoneNumError.classList.remove('active');


  let fullName = document.getElementById('fullname').value;
  let email = document.getElementById('email').value;
  let phoneNum = document.getElementById('phoneNumber').value;
  let bookDate = document.getElementById('bookDate').value;

  console.log('fullName:', fullName);
  console.log('email:', email);
  console.log('phoneNum:', phoneNum);
  console.log('bookDate:', bookDate);
  if(validateName(fullName,nameError)== false||validateEmail(email,emailError)==false||validatePhoneNum(phoneNum,phoneNumError)==false||validateBookDate(bookDate,bookDateError)){
    return;
  }else{
    radioButtons.forEach(function(radioButton) {
      radioButton.checked = false;
    });
    bookingForm.reset();
  }
};
function validateName(fullName,nameError){
  let pattern = /^[a-zA-Z]+$/; 
  if (!pattern.test(fullName)) {
    
    nameError.classList.add('active');
    return false;
  } else {
    return true;
  }
};
function validateEmail(email,emailError){
  if (!email.includes('@')) {
    
    emailError.classList.add('active');
    return false;
  } else {
    return true;
  }
};
function validatePhoneNum(phoneNum,phoneNumError){
  let pattern = /^\d+$/; 
  if (!pattern.test(phoneNum)) {
    
    phoneNumError.classList.add('active');
    return false;
  } else {
    return true;
  }
};

function validateBookDate(bookDate,bookDateError) {
  var currentDate = new Date();
  var selectedDate = new Date(bookDate);
  console.log(selectedDate);
  if (selectedDate < currentDate) {
    bookDateError.classList.add('active');
    return false;
  } else {
    return true;
  }
}

let price = document.getElementById('price');

radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', () => {
    price.innerHTML = radioButton.value;
  });
});

