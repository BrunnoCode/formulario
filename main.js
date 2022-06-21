const input = document.getElementById('js-input');
const icon = document.getElementById('js-img')
const btn = document.getElementById('js-btn')
const form = document.querySelector('.form')



btn.addEventListener('click', (event) => { 
    event.preventDefault()
  if (input.getAttribute('type') === 'text' ) {
    input.setAttribute('type', 'password');
    icon.setAttribute('src', "./img/eye-slash.svg")
  } else {
    input.setAttribute('type', 'text');
    icon.setAttribute('src', "./img/eye.svg");
  }

} 
)