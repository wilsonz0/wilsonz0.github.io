console.log("running!");

document.getElementById('introBTN').addEventListener("click", function(){
    console.log("You clicked the introBTN");
    document.getElementById("intro").classList.toggle('hidden');
});

document.getElementById('resumeBTN').addEventListener("click", function(){
    console.log("You clicked the resumeBTN");
    document.getElementById("resume").classList.toggle('hidden');
});

document.getElementById('contactBTN').addEventListener("click", function(){
    console.log("You clicked the contactBTN");
    document.getElementById("contact").classList.toggle('hidden');
});