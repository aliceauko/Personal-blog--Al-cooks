
const hide = document.querySelector('.hide');
const begin =document.querySelector('#mainButton');
begin.addEventListener('click', (e) => {
    e.preventDefault();
    begin.style.display = 'block';
    hide.style.display = 'block';
  });


const hid = document.querySelector('.hid');
const beginer =document.querySelector('#mainButton');
beginer.addEventListener('click', (e) => {
    e.preventDefault();
    beginer.style.display = 'block';
    hid.style.display = 'block';
  });

function myFunction(){
  alert("Thank you for getting intouch. Message received and we'll reach out to you via email soon")
}
