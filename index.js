
const text = document.getElementById('text');
const Button = document.getElementById('button');
const error = document.getElementById('error');

button.addEventListener('click', () => {
  if (text.value === 'error') {
    
    text.classList.add('error');
   
    error.textContent = 'Please fill in the input field.';
  } else {
    
    text.classList.remove('error');
   
    error.textContent = '';

  }
});
