class User{
    
    constructor(username, email, phoneNumber, password){
        this.username = username;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }

    getUsername(){
        return this.username;
    }

    getEmail(){
        return this.email;
    }

    getPhoneNumber(){
        return this.phoneNumber;
    }

    getPassword(){
        return this.password;
    }

}

var registerButton = document.getElementById("register");
var loginButton = document.getElementById("login");
var registerPage = document.getElementById("registerPage");
var loginPage = document.getElementById("loginPage");
var loginForm = document.getElementById("loginButton");
var registerForm = document.getElementById("registerButton");

var usernameRegister = document.getElementById("usernameRegister");
var emailRegister = document.getElementById("emailRegister");
var phoneNumber = document.getElementById("phoneNumber");
var passwordRegister = document.getElementById("passwordRegister");
var cPasswordRegister = document.getElementById("cPasswordRegister");

var email = document.getElementById("email");
var password = document.getElementById("password");

var newUser = new User("admin", "admin@gmail.com", "081234567890", "admin");
var newUser2 = new User("example", "example@gmail.com", "081111111111", "example123");
var users = [newUser, newUser2];

registerButton.onclick = (()=>{
    loginPage.style.display = "none";
    registerPage.style.display = "block";
});

loginButton.onclick = (()=>{
    registerPage.style.display = "none";
    loginPage.style.display = "block";
});

// registerForm.addEventListener("click", ()=>{
//     console.log("ok");
// });

loginForm.addEventListener("click", ()=>{
    var size = users.length;
    console.log(size);
    var checkUser = false;
    for(var i = 0; i < size; i++){
        console.log(email.value)
        if(email.value == users[i].getEmail() && password.value == users[i].getPassword()){
            checkUser = true;
            break;
        }
    }
    if(checkUser){
        alert("successfully logged in!");
    }else{
        alert("unsuccessfully logged in!")
    }
})

registerForm.addEventListener("click", ()=>{
    users.push(new User(usernameRegister.value, emailRegister.value, phoneNumber.value, passwordRegister.value))
})

// if(loginForm){
//     loginForm.addEventListener("click", ()=>{
  
//     });
// }
