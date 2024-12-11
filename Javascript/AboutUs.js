var visionContainer = document.querySelector('.vision');
var flexboxContainer = document.querySelector('.flexboxMain');

function checkOverflow(container) {
  if (container.scrollWidth > container.clientWidth) {
    container.classList.add('column');
  } else {
    container.classList.remove('column');
  }
}

window.addEventListener('resize', function() {
  checkOverflow(visionContainer);
  checkOverflow(flexboxContainer);
});

checkOverflow(visionContainer);
checkOverflow(flexboxContainer);
