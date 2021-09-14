function checkPassword(){
    // capture user entered password from our input element
    var passwordBoxObject = document.getElementById("passwordBox");
    var passwordEntered = passwordBoxObject.value;
    console.log("User entered passowrd:", passwordEntered);
    // check if the password is correct
    var sitePassword = "password1";
    if (passwordEntered == sitePassword) {
        // allow navigation
        window.location.assign("members.html");
    } else {
        // block navigation
        // add a new style rule for incorrect-password element
        document.getElementById("incorrect-password").style.color = "red";
        // add text for incorrect-password element
        document.getElementById("incorrect-password").innerHTML = "Incorrect password. Please try again..."
        
    }
}