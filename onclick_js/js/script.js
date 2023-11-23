function changeText() {
    var button =  document.querySelector('.button_nav');
    if (button.textContent === 'Login'){
        button.textContent= 'Logout';
    } else {
        button.textContent = 'Login';
    }
}
function hideButton() {
var box2 = document.querySelector('.button_box2');
box2.remove()
}

function likeAction() {
    alert('Ninja was liked');
}