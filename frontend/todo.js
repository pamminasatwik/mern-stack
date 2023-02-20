console.log("hello from js");

fetch("/api/todos")
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);
    });

// change an attribute of html tag 
var light = true;

// change innerhtml of themebutton to Sun icon
function setTheme() {
    if (light) {
        document.documentElement.setAttribute("data-bs-theme", "dark");
        document.getElementById("themeButton").innerHTML = '<i class="fas fa-sun fa-lg fa-fw"></i>';
    } else {
        document.documentElement.setAttribute("data-bs-theme", "light");
        document.getElementById("themeButton").innerHTML = '<i class="fas fa-moon fa-lg fa-fw"></i>';
    }
    light = !light;
}
