$(document).ready(function() {
    console.log("READY");
    const logButton = $("#log-in");

    logButton.on("click", function(e) {
        e.preventDefault();

        let uName = $("#uname").val().trim();
        let pass = $("#pass").val().trim();
        let email = $("#email").val().trim();

        if (uName && pass && email) {
            var obj = {
                name: uName,
                pass: pass,
                email: email
            }

            $.post("/user/create", obj, () => {

            })

        }
    })

});