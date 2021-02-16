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
    // for (var pair of formData.entries()) {
    //     console.log(`${pair[0]}, ${pair[1]}`);
    // }

    fetch("api/users/login", {
            method: 'POST',
            body: formData
        }).then((response) => response.json())
        .then((response) => {
            // debug print
            console.log(response);

            // if the response is positive
            if (response.status) {
                alert(response.message);
                // redirect to main page
                window.location.href = '/';
            } else {
                //else print error
                alert(response.message);
            }

        }).catch(error => console.log(error));




}