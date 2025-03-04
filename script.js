let text = document.getElementById("text")
const button = document.getElementById("button1")

let clicks = 0;

button1.addEventListener("click", yell_at_user)

function yell_at_user() {
    clicks++;
    if( clicks == 1 ) {
        text.innerHTML = "WHY DID YOU PRESS THE BUTTON!"
    }
    else if( clicks == 5 ) {
        text.innerHTML = "STOP PRESSING IT!"
    }
    else if( clicks == 10 ) {
        text.innerHTML = "STOP IT!"
    }
    else if( clicks == 15 ) {
        text.innerHTML = "STOP!!"
    }
    else if( clicks == 20 ) {
        text.innerHTML = "AHHHHH!!!!"
    }
    else if( clicks == 25 ) {
        text.innerHTML = "WHY!"
    }
    else if( clicks == 27 ) {
        text.innerHTML = "WON'T!"
    }
    else if( clicks == 29 ) {
        text.innerHTML = "YOU!"
    }
    else if( clicks == 31 ) {
        text.innerHTML = "STOP!"
    }
    else if( clicks == 35 ) {
        button1.classList.add("Idea")
        text.innerHTML = "Maybye this will make you stop."
        
    }
}
