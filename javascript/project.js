import { toggleContent } from "./common.js"

console.log("Project.js is running")

document.getElementById('portfolioProjectBTN').addEventListener("click", function() {
    toggleContent("portfolioProjectBTN", "portfolioProject")
});