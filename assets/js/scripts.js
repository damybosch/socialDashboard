var toggleButton = document.getElementById('scheme-toggle');

toggleButton.addEventListener("click", changeScheme);

function changeScheme() {
    var body = document.getElementById('body');

    if(body.dataset.scheme == "light") {
        body.dataset.scheme = "dark";
    }else if(body.dataset.scheme == "dark") {
        body.dataset.scheme = "light";
    }
}