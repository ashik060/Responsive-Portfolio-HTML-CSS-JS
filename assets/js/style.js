
/* ------------------  For About Section --------------------*/
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// --------------- For Extra Small Screen ---------------

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

// -------------- For Taking Google Form Data via this contact form ----------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbwXzvkuqoo4jc3c6LrBxkuzwdJf77oZZmq17eaP1FeDb3cjt-uRy-hlGNevO3pU3wTY/exec'

const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById("allert-submit-msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 3000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})