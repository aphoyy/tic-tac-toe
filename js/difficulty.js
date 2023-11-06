function setDifficulty(e) {
    difficulty = document.getElementById("difficulty-slider").value
}

let settingsVisibilty = false;

function displaySettings() {
    if (settingsVisibilty === false) {
        document.getElementById("settings-div").classList.remove("hidden");
        document.getElementById("card").style.marginLeft = "150px";
        settingsVisibilty = true;
    } else {
        document.getElementById("settings-div").classList.add("hidden");
        document.getElementById("card").style.marginLeft = "0px";
        settingsVisibilty = false;
    }
}