var eventImage = document.getElementById('event-jpg');
var roomImage = document.getElementById('room-jpg');
var roomText = document.getElementById('room-text');
var eventText = document.getElementById('event-text');

var eventImages = [
  '../resources/neverGonnaHappenLol.jpg',
];
var roomImages = [
  '../resources/1-bed_bedroom.jpg',
  '../resources/2-beds_bedroom.jpg',
  '../resources/MasterBedroom-1.jpg'
];
var eventIndex = 0;
var eventInterval = setInterval(changeEventImage, 2000);
function changeEventImage() {
  eventImage.src = eventImages[eventIndex];
  eventIndex++;
  if (eventIndex >= eventImages.length) {
    eventIndex = 0;
  }
}
var roomIndex = 0;
var roomInterval = setInterval(changeRoomImage, 2000);
let roomLinks =[
 'RoomDetails.html#single-room',
 'RoomDetails.html#double-room',
 'RoomDetails.html#luxurious-suite'
]
function changeRoomImage() {
  roomImage.src = roomImages[roomIndex];
  roomText.href = roomLinks[roomIndex];
  roomIndex++;
  if (roomIndex >= roomImages.length) {
    roomIndex = 0;
  }
}

roomImage.addEventListener('mouseenter',function(){
    roomText.classList.add('visible');
    clearInterval(roomInterval);
});
let container2 = document.getElementById('container2');
roomImage.addEventListener('mouseleave', function (e) {
  
  if (!container2.contains(e.relatedTarget)) {
    roomText.classList.remove('visible');
    roomInterval = setInterval(changeRoomImage, 2000);
  }
});

eventImage.addEventListener('mouseenter',function(){
    eventText.classList.add('visible');
    clearInterval(eventInterval);
});
let container1 = document.getElementById('container1')
eventImage.addEventListener('mouseleave', function (e) {
  
  if (!container1.contains(e.relatedTarget)) {
    eventText.classList.remove('visible');
    eventInterval = setInterval(changeEventImage, 2000);
  }
});




var extraContainer = document.querySelector('.extra');
function checkOverflow() {
  if (extraContainer.scrollWidth > extraContainer.clientWidth) {
    extraContainer.style.flexDirection = 'column';
    extraContainer.style.alignItems = 'center';
  } else {
    extraContainer.style.flexDirection = 'row';
    extraContainer.style.alignItems = 'initial';
  }
}
window.addEventListener('resize', checkOverflow);
checkOverflow();


