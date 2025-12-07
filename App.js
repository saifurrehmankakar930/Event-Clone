
// console.log("hello world");
//onclick
//onchange
//onmouseover
//onmouseout
//onsubmit

// function testing(){
//     console.log("test");

// }

// const head = document.querySelector("#head");

// head.addEventListener("click" , ()=>{
//     console.log("hello from addeventlistner");

// })

// head.addEventListener("click" , testing)

// onchange

// const input = document.querySelector("#myinput");

// input.addEventListener("input", () => {
//   console.log("input event triggered");
// });

// const head = document.querySelector("#head");

// head.addEventListener("mouseover" , ()=>{
//     console.log("mouse over triggered");

// })

// head.addEventListener("mouseout" , ()=>{
//     console.log("mouse out");

// })

// const onBulb = "https://cdn.mos.cms.futurecdn.net/8URLqwFeJihbNpn3gByhg3.jpg"

// const offBulb = "https://i.pinimg.com/564x/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.jpg"

// const img = document.querySelector("#img");

// img.addEventListener("mouseover" , ()=>{
//     console.log("mouse over");
//     img.src = onBulb

// })
// img.addEventListener("mouseout" , ()=>{
//     console.log("mouse out");
//     img.src = offBulb

// })

// bubbling

// capturing

// const ul = document.querySelector(".images");
// const imgThree = document.querySelector("#image-3");
// const link = document.querySelector("#link-1");

// ul.addEventListener("click", () => {
//   console.log("ul clicked");
// });

// imgThree.addEventListener("click", (event) => {
//     // console.log(event.target);
//     event.stopPropagation()

//   console.log("li clicked");
// });

// link.addEventListener("click" , (event)=>{
//     event.stopPropagation()
//     event.preventDefault()
//     console.log("testing");

// })

// ul.addEventListener("click" , (event)=>{
//     console.log(event.target.tagName);
//     console.log(event.target.parentNode);

//     if(event.target.tagName === "IMG"){
//         event.target.parentNode.remove()
//         return

//     }

// })

// onsubmit

// const firstName = document.querySelector("#firstname");
// const lastName = document.querySelector("#lastname");
// const form = document.querySelector("#form");

// form.addEventListener("submit" , (event)=>{
//     event.preventDefault()
//     console.log(firstName.value);
//     console.log(lastName.value);

// })

// synchronous
// asynchronous

// console.log("01");
// console.log("02");
// console.log("03");
// setTimeout(() => {
//   console.log("04");
// }, 0);
// console.log("05");



// setimeout
// setinterval
// promises
// async await
// fetch
// axios

// setTimeout(() => {
//   console.log("04");
// }, 0);

































// 🖱️ JavaScript EventsFocus Areas:
// 🖱️ Basic Interactions
// 1. Click to Change Background
// When a button is clicked, change the background color of the entire page to a random
// color.
const button = document.querySelector("button");

button.addEventListener("click" , ()=>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
});




















// 2. Toggle Light Mode / Dark Mode
// Add a button that toggles between light and dark themes using class changes.
const themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click" , ()=>{
    document.body.classList.toggle("dark-mode");
});



























// 3. Hide Element on Click
// When a specific element is clicked, hide it from view using style.display =
// 'none'.
const head = document.querySelector("#h1");
const btn = document.querySelector("#btn");

btn.addEventListener("click" , ()=>{
    head.style.display = "none";
});















// 4. Counter with Buttons
// Create "Increase" and "Decrease" buttons that modify a number displayed on the
// screen.
let count = 0;
const increaseBtn = document.querySelector("#incBtn");
const decreaseBtn = document.querySelector("#decBtn");
const counterDisplay = document.querySelector("#num");
increaseBtn.addEventListener("click" , ()=>{
    count++;
    counterDisplay.textContent = count;
});
decreaseBtn.addEventListener("click" , ()=>{
    count--;
    counterDisplay.textContent = count;
});





















// 5. Disable Button After Click
// Create a button that disables itself after being clicked once.
// ⌨️ Keyboard & Input Events

const disableBtn = document.querySelector("#disableBtn");

disableBtn.addEventListener("click" , ()=>{
    disableBtn.disabled = true;
});
























// 6. Live Character Count
// Display how many characters have been typed into a textarea in real time.
const textarea = document.querySelector("#myTextarea");
const charCount = document.querySelector("#charCount"); 

textarea.addEventListener("input" , ()=>{
    charCount.textContent = textarea.value.length;
});



























// 7. Password Strength Checker
// Show strength feedback ("Weak", "Strong") as the user types a password.
const passwordInput = document.querySelector("#password");
const strengthDisplay = document.querySelector("#strength");

passwordInput.addEventListener("input" , ()=>{
    const password = passwordInput.value;
    if(password.length < 6){
        strengthDisplay.textContent = "Weak";
        strengthDisplay.style.color = "red";
    } else{
        strengthDisplay.textContent = "Strong";
        strengthDisplay.style.color = "green";
    }   
});













// 8. Enter to Submit
// When the user presses Enter inside an input field, submit the form (or show an alert).
// 9. Auto Uppercase Input
// As the user types in a text field, convert the characters to uppercase live.
// 10. Detect Forbidden Words
// Prevent form submission if input contains banned words (like "spam", "test").
// 🧪 Form & Change Events
// 11. Dropdown Dynamic Update
// When a country is selected in one dropdown, dynamically populate a second dropdown
// with its cities.
// 12. Form Validation on Submit
// Validate all fields (e.g., name, email) when the form is submitted. Show inline error
// messages.
// 13. Show/Hide Password
// Toggle password visibility with a checkbox or icon (eye icon behavior).
// 14. Color Picker Live Preview
// Use an <input type="color"> to change the background color of a preview box
// live.
// 15. Checkbox Agreement
// Disable the "Submit" button unless a "Terms and Conditions" checkbox is checked.
// 🧠 Advanced or Combined Events
// 16. Image Hover Preview
// Show a larger preview of an image when hovering over a thumbnail using mouseover
// and mouseout.
// 17. Scroll to Reveal Button
// Display a "Back to Top" button only when the user scrolls down 300px or more.
// 18. Form Auto Save
// Save form inputs to localStorage as the user types and restore them on reload.
// 19. Click Outside to Close Modal
// Create a modal that closes when clicking anywhere outside of it.
// 20. Key Logger Tracker
// Track and display keys pressed on the keyboard in a <div> (excluding special keys).