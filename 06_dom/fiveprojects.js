const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click',function (e){
        console.log(e);
        if (e.target.id==='grey'){
            body.style.backgroundColor = e.target.id;
        }
    });

});