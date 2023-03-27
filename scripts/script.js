// function declaration
// function greet (name) {
//     console.log(`Hello ${name}`)
// }
// // function calling
// greet("Paulo")

// function expression
// const greet = function (name) {
//     console.log(`Hello ${name}`);
// }
// //function calling
// greet ("Paulo")

// // function expression
// const greet = (name) => {
//     console.log(`Hello ${name}`)
// }
// // function calling
// greet()

// // function declaration
// function greet (name, time = "Day") {
//     console.log(`Good ${time} ${name}`)
// }
// // function calling
// greet("Paulo")


// const value = prompt("Enter a value: ");

// // references to p tags
// const radiusPara = document.querySelector("#radius");
// radiusPara.textContent = `Value entered by user is ${value}`
// console.log(radiusPara);
// const resultPara = document.querySelector("#result");
// console.log(resultPara);

// function calculateArea(radius) {
//     if(isNaN(radius)) {
//         // error: this is not a number
//         resultPara.textContent = "Error: This is not a number";
//     } else {
//     const area = Math.PI * radius * radius;
//     return area.toFixed(2);
//     }
// }

// let result = calculateArea(value);
// console.log(result)        
// alert(`The area of the circle with the ${value} is ${result}`);
// resultPara.textContent =`The area of the circle with the ${value} is ${result}`;


function populatelist(myShoppingList)
{
    // get access to the ul element
    const ulElement = document.querySelector("ul.shopping");
    // console.log(ulElement)
    // loop through myShoppingList array
    for (let item of myShoppingList) {
        // console.log(item)
        let newli = document.createElement("li")
        newli.textContent = item;
        ulElement.appendChild(newli);

    // add an li under the ul element with text equal to each item of my 
    }
}

let shoppingList = ['bread', 'cheese', 'green pepper'];
populatelist(shoppingList);


function squarelist() {
    // get access to the ul
    const elem = document.querySelector("ul.circlelist");
    // remove circlelist class
    elem.classList.remove("circlelist");
    // add squarelist
    elem.classList.add("squarelist");
}


squarelist();

function updateImage()
{
    const image = document.querySelector("#shoppingCart");
    image.setAttribute("src", 'https://cdn-icons-png.flaticon.com/512/263/263142.png');
    image.setAttribute("alt", 'shopping cart')
    image.setAttribute("height", 100)
}
updateImage();