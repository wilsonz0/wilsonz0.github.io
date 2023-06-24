export function toggleContent(btnID, contentID) {
    document.getElementById(contentID).classList.toggle('hidden');
    
    let otherContents = document.querySelectorAll("#display div:not(#" + contentID + ")");
    console.log(otherContents)

    otherContents.forEach((content) => {
        content.classList.add('hidden')
    });
}