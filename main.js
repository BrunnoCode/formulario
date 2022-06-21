const input = document.getElementById('js-input');
const icon = document.getElementById('js-img')
const btn = document.getElementById('js-btn')
const form = document.querySelector('.form')
const areaInput = document.querySelector('#area-input')


btn.addEventListener('click', (event) => { 
    event.preventDefault()
  if (input.getAttribute('type') === 'text' ) {
    input.setAttribute('type', 'password');
    icon.setAttribute('src', "./img/eye-slash.svg")
    
  } else {
    input.setAttribute('type', 'text');
    icon.setAttribute('src', "./img/eye.svg");
  }
  areaInput.style
} 
)

areaInput.addEventListener("click", () => {
if (input.value == "") {
  areaInput.style.border = "1px solid #868686"
} else {
  areaInput.style.border = "2px solid #ffc632"
}
    
}
)