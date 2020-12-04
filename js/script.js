const btnSwitch= document.querySelectorAll('.switch');
const registerForm= document.querySelector('.register-form');
 for(let i=0; i<btnSwitch.length; i++){
btnSwitch[i].addEventListener('click',()=>{
registerForm.classList.toggle('toggle');
})
}