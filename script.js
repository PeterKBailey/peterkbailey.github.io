const headlines = [
    "Hi I'm Peter!", 
    "Welcome to my portfolio website!",
    "Find out more about my skills and experience here!"
];

function init(){
    const cursorElem = document.getElementById("cursor");
    // const t = setInterval(startCursor, , cursorElem);
    startTyping();
}

function startCursor(cursorElement){
    let newVisibility = "visible";
    if(cursorElement.style.visibility === newVisibility){
        newVisibility = "hidden";
    }
    cursorElement.style.visibility = newVisibility;
}

function startTyping(){
    let textIndex = 0;
    let i = 0;
    function appendText() {         
        setTimeout(function() { 
            document.getElementById("typewriter").innerText += headlines[textIndex][i];
            i++;
            
            if(i === headlines[textIndex].length){
                i = 0;
                setTimeout(deleteText, 750);
            }
            else{
                appendText();
            }
        }, Math.floor(Math.random() * (75 - 50 + 1)) + 50);
    }
    let deleteTime = 100;
    function deleteText(){
        setTimeout(function() { 
            let innerText = document.getElementById("typewriter").innerText;
            document.getElementById("typewriter").innerText = innerText.substring(0, innerText.length-1);
           
            if(document.getElementById("typewriter").innerText.length === 0){
                textIndex = (textIndex+1) % headlines.length;
                appendText();
            }
            else{
                deleteText();
            }
        }, 30);
    }


    appendText()
}

