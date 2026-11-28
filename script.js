const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

const menuButton = document.querySelector("#menu-button");
const nav = document.querySelector("#site-nav");

menuButton.addEventListener("click", function(){
    nav.classList.toggle("open");
    if (nav.classList.contains("open")){
        menuButton.textContent = "close";
    } else {
        menuButton.textContent = "Menu";
    }
});

// Dark mode
const themeButton=document.querySelector('#theme-button');

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    themeButton.textContent = 'light Mode';
    localStorage.setItem("theme", "dark");
};

themeButton.addEventListener("click",function(){
    document.body.classList.toggle("dark");
    if (document.body.classList.contains('dark')){
        themeButton.textContent = "light mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeButton.textContent = "Dark mode";
        localStorage.setItem("theme", "light");
    }
});

const form=document.querySelector(".contact-form");
const thanks=document.querySelector("#thanks");


function showError(id, message){
    document.querySelector(id).textContent = message;
};
form.addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    let ok = true;

    showError("#name-error", "");
    showError("#email-error", "");
    showError("#message-error", "");

    if(name === ""){
        showError("#name-error", "please type your name.");
        ok = false;
    }
    if (email === ""){
        showError("#email-error", "Please type your email.");
        ok = false;
    } else if (email.includes("@") === false){
        showError('#email-error', 'Your email needs an @ sign.')
        ok = false;
    }
    if (message.length<10){
        showError('#message-error', 'please write at least 10 characters');
        ok = false;
    }

    if (ok){
        thanks.textContent=`Thanks, ${name}! for reaching out.`
        thanks.hidden = false
        form.reset();
    }
});
