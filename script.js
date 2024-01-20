const btn = document.getElementById("btn");

const output = document.querySelector(".output"); // Remove the dot before "output"

let quote = [
    "The only way to do great work is to love what you do.",
    "Be the change that you wish to see in the world.", 
    "In three words I can sum up everything I've learned about life: it goes on.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The best way to predict the future is to create it." ,
    "Life is what happens when you're busy making other plans.",
    "The only person you are destined to become is the person you decide to be." ,
    "Believe you can and you're halfway there." ,
    "Happiness is not something ready-made. It comes from your own actions."
];

btn.addEventListener("click", () => {
    console.log("Clicked");
    let random = Math.floor(Math.random() * quote.length);
    output.textContent = quote[random];
});
