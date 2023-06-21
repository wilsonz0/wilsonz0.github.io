console.log("running!");

function toggleContent(btnID, contentID) {
    document.getElementById(contentID).classList.toggle('hidden');
    
    let otherContents = document.querySelectorAll("#display div:not(#" + contentID + ")");
    console.log(otherContents)

    otherContents.forEach((content) => {
        content.classList.add('hidden')
    });
}

document.getElementById('introBTN').addEventListener("click", function() {
    toggleContent("introBTN", "intro")
});

document.getElementById('resumeBTN').addEventListener("click", function() {
    toggleContent("resumeBTN", "resume")
});

document.getElementById('contactBTN').addEventListener("click", function() {
    toggleContent("contactBTN", "contact")
});