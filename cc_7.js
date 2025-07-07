const input = document.getElementById('newHeadline');
const button = document.querySelector('#ctaform button');
const ctaHeadline = document.querySelector('.hero h2');

button.addEventListener('click', function(event) {
    event.preventDefault(); 
    ctaHeadline.textContent = input.value;
});