let radioButtons = document.querySelectorAll('input[type="radio"][name="opt"]');
let radioButtons2 = document.querySelectorAll('input[type="radio"][name="opt2"]');
let roomDescription = document.getElementById('roomDescription');
let roomDescription2 = document.getElementById('roomDescription2');
let roomTitle = document.getElementById('roomTitle');
let roomTitle2 = document.getElementById('roomTitle2');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
  
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
  window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('opt1').checked = true;
    document.getElementById('opt1').dispatchEvent(new Event('change'));
    document.getElementById('opt1-2').checked = true;
    document.getElementById('opt1-2').dispatchEvent(new Event('change'));
  });
  radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
      
      if (radioButton.value === '1-bed_bedroom') {
        roomDescription.innerHTML = `
          1 bed <br>
          Shower bathroom<br>
          TV<br>
          Workdesk<br><br><br><br><br>
          <span>RP.487.000,00</span>
        `;
        roomTitle.innerHTML ='<span>Single Room</span>';
        img1.src = '../resources/1-bed_bedroom.jpg';
      } else if (radioButton.value === '2-beds_bedroom') {
        roomDescription.innerHTML = `
          2 beds <br>
          Bathub bathroom<br>
          Large TV<br>
          Workdesk<br>
          Couch and Sofa<br><br><br><br>
          <span>RP.637.000,00</span>
        `;
        roomTitle.innerHTML ='<span>Double Room</span>';
        img1.src = '../resources/2-beds_bedroom.jpg';
      } else if (radioButton.value === 'MasterBedroom-1') {
        roomDescription.innerHTML = `
          Master bedroom<br>
          2 single bed bedrooms<br>
          Bathub barhroom<br>
          Smart TV<br>
          Workdesk<br>
          Couch and Sofa<br>
          Kitchen and Minibar<br><br>
          <span>RP.1.497.000,00</span>
        `;
        roomTitle.innerHTML ='<span>Luxurious Suite</span>';
        img1.src = '../resources/MasterBedroom-1.jpg';
      }
    });
  });

  // Add event listener to each radio button
  radioButtons2.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
      // Update the room description based on the selected radio button
      if (radioButton.value === '1-bed_bedroom') {
        roomDescription2.innerHTML = `
          1 bed <br>
          Shower bathroom<br>
          TV<br>
          Workdesk<br><br><br><br><br>
          <span>RP.487.000,00</span>
        `;
        roomTitle2.innerHTML ='<span>Single Room</span>';
        img2.src = '../resources/1-bed_bedroom.jpg';
      } else if (radioButton.value === '2-beds_bedroom') {
        roomDescription2.innerHTML = `
         2 beds <br>
         Bathub bathroom<br>
         Large TV<br>
         Workdesk<br>
         Couch and Sofa<br><br><br><br>
         <span>RP.637.000,00</span>
        `;
        roomTitle2.innerHTML ='<span>Double Room</span>';
        img2.src = '../resources/2-beds_bedroom.jpg';
      } else if (radioButton.value === 'MasterBedroom-1') {
        roomDescription2.innerHTML = `
          Master bedroom<br>
          2 single bed bedrooms<br>
          Bathtub bathroom<br>
          Smart TV<br>
          Workdesk<br>
          Couch and Sofa<br>
          Kitchen and Minibar<br><br>
          <span>RP.1.497.000,00</span>
        `;
        roomTitle2.innerHTML ='<span>Luxurious Suite</span>';
        img2.src = '../resources/MasterBedroom-1.jpg';
      }
    });
  });

let compare = document.querySelector('.compare');
let singleRoom = document.getElementById('single-room');
let doubleRoom = document.getElementById('double-room');
let luxuriousSuite = document.getElementById('luxurious-suite');
function checkOverflow() {
  if (compare.scrollWidth > compare.clientWidth) {
    compare.style.flexDirection = 'column';
    compare.style.alignItems = 'center';
    compare.style.minHeight = '100vh';
  } else {
    compare.style.flexDirection = 'row';
    compare.style.alignItems = 'initial';
    compare.style.minHeight = 'none';
  }
  if (singleRoom.scrollWidth > singleRoom.clientWidth){
    singleRoom.style.flexDirection = 'column';
    singleRoom.style.alignItems = 'center';

    doubleRoom.style.flexDirection = 'column';
    doubleRoom.style.alignItems = 'center';

    luxuriousSuite.style.flexDirection = 'column';
    luxuriousSuite.style.alignItems = 'center';
  }else{
    singleRoom.style.flexDirection = 'row';
    singleRoom.style.alignItems = 'initial';

    doubleRoom.style.flexDirection = 'row';
    doubleRoom.style.alignItems = 'initial';

    luxuriousSuite.style.flexDirection = 'row';
    luxuriousSuite.style.alignItems = 'initial';
  }
  
}

checkOverflow();
window.addEventListener('resize', checkOverflow);

  