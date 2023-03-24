let form = document.getElementsByTagName("form")[0];

let errorEmail = document.querySelector(".invalid-email");
errorEmail.style.display = "none";

let errorAge = document.querySelector(".invalid-age");
errorAge.style.display = "none";
// console.log(errorEmail);
// console.log("teste");

let submitButton = document.querySelector("button[type=submit]");
// console.log(submitButton);

let user = new User();

form.oninput = function (e) {

    let formData = new FormData(form);
    user.name = formData.get("name");
    user.age = formData.get("age");
    user.phone = formData.get("phone");
    user.senha = formData.get("password");
    user.email = formData.get("email");

    if(String(user.email).includes("@")) {
        errorEmail.style.display = "none";
        submitButton.removeAttribute("disabled");
    } else if (user.email === "") {
        errorEmail.style.display = "none";
    }
    
    else {
        errorEmail.style.display =  "block";
        submitButton.setAttribute("disabled", true);
    }
    // console.log(user.age >0);
    if((user.age > 0 || user.age === "")) {
        errorAge.style.display = "none";
    } else {
        errorAge.style.display = "block";
    }

    /*
    let formValid = user.name !== "" && user.age !== "" && user.phone !== "" && user.password !== "" && user.email !== "";

    if (formValid) {
        submitButton.removeAttribute("disabled");
    } else {
        submitButton.setAttribute("disabled", true);
    }
    */

    // console.clear();
    // console.log(user);
};

form.onsubmit = (e) => {
    e.preventDefault();
    console.log(user);
};