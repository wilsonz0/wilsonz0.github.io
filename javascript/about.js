import { toggleContent } from "./common.js"

console.log("About.js is running")

document.getElementById('introBTN').addEventListener("click", function() {
    toggleContent("introBTN", "intro")
});

document.getElementById('resumeBTN').addEventListener("click", function() {
    toggleContent("resumeBTN", "resume")
});

document.getElementById('contactBTN').addEventListener("click", function() {
    toggleContent("contactBTN", "contact")
});
