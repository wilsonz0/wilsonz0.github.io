console.log("running!");

document.getElementById('introBTN').addEventListener("click", function(){
    document.getElementById("intro").classList.toggle('hidden');

    if (!document.getElementById("resume").classList.contains('hidden')) {
        document.getElementById("resume").classList.add('hidden');
    }
    if (!document.getElementById("contact").classList.contains('hidden')) {
        document.getElementById("contact").classList.add('hidden');
    }
});

document.getElementById('resumeBTN').addEventListener("click", function(){
    document.getElementById("resume").classList.toggle('hidden');

    if (!document.getElementById("intro").classList.contains('hidden')) {
        document.getElementById("intro").classList.add('hidden');
    }
    if (!document.getElementById("contact").classList.contains('hidden')) {
        document.getElementById("contact").classList.add('hidden');
    }
});

document.getElementById('contactBTN').addEventListener("click", function(){
    document.getElementById("contact").classList.toggle('hidden');

    if (!document.getElementById("intro").classList.contains('hidden')) {
        document.getElementById("intro").classList.add('hidden');
    }
    if (!document.getElementById("resume").classList.contains('hidden')) {
        document.getElementById("resume").classList.add('hidden');
    }
});