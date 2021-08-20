// top player text color
document.getElementById('top-player').style.color = 'purple';

// top player div background color

const playerDiv = document.getElementById('player-list');
playerDiv.style.backgroundColor = "rgb(128,0,0)	";
// playerDiv.style.padding = "10px";
playerDiv.style.borderRadius = "5px";
playerDiv.style.color = "white";

// top blog text color
document.getElementById('blog-Id').style.color = 'tomato';



// create an html element 

// for (let i = 0; i < 3; i++) {
//     let newElement = document.createElement('li');
//     let newElementText = document.createTextNode('Objective C');
//     let addElement = document.querySelector('#ul-list');
//     newElement.appendChild(newElementText);
//     addElement.appendChild(newElement);
// }


// select input field 

const inputField = document.getElementById('input-field');
const inputFieldText = inputField.value;
console.log(inputFieldText);

// select button
const inputBtn = document.querySelector('#checkBtn');

let count = 0;
function disabledFun() {
    count++;
    if (count <= 5) {
        if (count == 5) {
            let newElement = document.createElement('li');
            let newElementText = document.createTextNode('“Knowledge is power');
            let addElement = document.querySelector('#ul-list');
            newElement.appendChild(newElementText);
            addElement.appendChild(newElement);
            inputBtn.disabled = true;
            inputField.value = count;
        } else {
            let newElement = document.createElement('li');
            let newElementText = document.createTextNode('“Knowledge is power”');
            let addElement = document.querySelector('#ul-list');
            newElement.appendChild(newElementText);
            addElement.appendChild(newElement);
            inputField.value = count;
            inputBtn.disabled = false;
        }

    } else {
        inputBtn.disabled = true;
    }
}