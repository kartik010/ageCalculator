//making the circle clickable
let circles = document.querySelector(".circle");

  circles.addEventListener("click", myFunction);

let input = document.getElementById('year');
//making the year a point where if enter is pressed the circle button gets pressed
input.addEventListener("keypress", function(event){
  if (event.key == "Enter"){
    event.preventDefault;
    document.querySelector(".circle").click();
  }
})  

function myFunction() {

// finding the date of birth
  let currentDate = new Date();
  let years = document.getElementById('year').value;
  let months = document.getElementById('month').value;
  let days = document.getElementById('day').value
  let dobYear = currentDate.getFullYear() - years;
  let dobMonth = (1 + currentDate.getMonth()) - months;
  let dobDay = currentDate.getUTCDate() - days;
  if (dobDay < 0 ){
    dobDay = (currentDate.getUTCDate() + 30) - days ;
    dobMonth = dobMonth - 1;
  }
  if (dobMonth < 0){
    dobMonth = (13 + currentDate.getMonth()) - months;
    dobYear = (dobYear - 1);
  }
 
// Error handling
  if (days === '' || months === '' || years === '') {
    document.getElementById('errorDD').innerText = 'Fields are required';
    document.getElementById('errorMM').innerText = 'Fields are required';
    document.getElementById('errorYY').innerText = 'Fields are required';
    document.getElementById('lable').style.color = 'hsl(0, 100%, 67%)';
    document.getElementById('lable1').style.color = 'hsl(0, 100%, 67%)';
    document.getElementById('lable2').style.color = 'hsl(0, 100%, 67%)';
  } else if (dobYear < 0 || dobMonth < 0 || dobDay < 0 || dobMonth > 13 || dobDay > 32) {
    document.getElementById('errorDD').innerText = 'Must be a valid date';
    document.getElementById('errorMM').innerText = 'Must be a valid date';
    document.getElementById('errorYY').innerText = 'Must be a valid date';
    document.getElementById('lable').style.color = 'hsl(0, 100%, 67%)';
    document.getElementById('lable1').style.color = 'hsl(0, 100%, 67%)';
    document.getElementById('lable2').style.color = 'hsl(0, 100%, 67%)';
  } else {
    document.getElementById('errorDD').innerText = '';
    document.getElementById('errorMM').innerText = '';
    document.getElementById('errorYY').innerText = '';
    document.getElementById('lable').style.color = 'hsl(0, 1%, 44%)';
    document.getElementById('lable1').style.color = 'hsl(0, 1%, 44%)';
    document.getElementById('lable2').style.color = 'hsl(0, 1%, 44%)';
  }

  
//printing it on the screen
  document.querySelector('.yy').innerText = dobYear;
  document.querySelector('.mm').innerText = dobMonth;
  document.querySelector('.dd').innerText = dobDay;
}