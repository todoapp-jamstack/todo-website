window.onload = function() {

    let Form = document.getElementById("loginForm");

    Form.addEventListener("submit", function(event) {
        event.preventDefault();

        loginHandler(Form);
    });

}


function loginHandler(Form) {

    let formData = new FormData(Form);

    // Display the key/value pairs
    for (var pair of formData.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
    }

    fetch("api/users/login", {
            method: 'POST',
            body: formData
        }).then((response) => response.json())
        .then((response) => {
            console.log(response);
        }).catch(error => console.log(error));




}