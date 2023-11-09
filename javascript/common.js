export function toggleContent(btnID, contentID) {
    document.getElementById(contentID).classList.toggle('hidden');
    document.getElementById(btnID).classList.toggle('pressed');
    
    let display = document.getElementById("display");
    let otherContents = display.querySelectorAll(":scope > div:not(#" + contentID + ")");
    let otherBtns = document.querySelectorAll("#content button:not(#" + btnID + ")");
    console.log(otherContents)
    console.log(otherBtns)

    otherContents.forEach((content) => {
        content.classList.add('hidden')
    });

    otherBtns.forEach((btn) => {
        btn.classList.remove('pressed')
    });
}