document.getElementById("toMain").addEventListener('click' , () => {
    window.location.assign("index.html");

})

document.getElementById("toResume").addEventListener('click' , () => {
    window.location.assign("resume.html");
})

document.getElementById("copyDiscord").addEventListener("click" , () => {
    navigator.clipboard.writeText("RazeTheCity#7048");


    alert("Copied to clipboard (RazeTheCity#7048)");
})

document.getElementById("copyEmail").addEventListener("click" , () => {
    navigator.clipboard.writeText("zacharyswatfigure@gmail.com");
    

    alert("Copied to clipboard (zacharyswatfigure@gmail.com)");
})