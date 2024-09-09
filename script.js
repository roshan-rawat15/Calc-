let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button'); // Changed to querySelectorAll to select all buttons

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML; // Corrected from innerHtml to innerHTML
        
        if(e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTML == 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        }

        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
