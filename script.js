let choices = document.querySelectorAll('.playerChoice');

for (choice of choices) {
    choice.addEventListener('click', function(){
        console.log(this);
    });
}