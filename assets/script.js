

document.getElementById("copyDiscord").addEventListener("click" , () => {
    navigator.clipboard.writeText("RazeTheCity#7048");


    alert("Copied to clipboard (RazeTheCity#7048)");
})

document.getElementById("toResume").addEventListener('click' , () => {
    window.location.assign("resume.html");
})

document.getElementById("copyEmail").addEventListener("click" , () => {
    navigator.clipboard.writeText("zacharyswatfigure@gmail.com");
    

    alert("Copied to clipboard (zacharyswatfigure@gmail.com)");
})

document.getElementById("toProjects").addEventListener("click" , () => {
    window.location.assign("myProjects.html");

})