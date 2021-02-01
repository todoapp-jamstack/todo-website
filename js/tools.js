// function to go back in time
function goBack() {
    window.history.back();
}

// add event lister to button to go back
document.getElementById("backButton").addEventListener("click", function() {
    goBack();
})