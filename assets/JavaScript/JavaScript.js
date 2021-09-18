var name = document.getElementById("name")
var email = document.getElementById("email")
var password = document.getElementById("password")
var confirmPassword = document.getElementById("confirmpassword")

function signUp(name,email,password,corfirmpassword){
if (!name || name==""){alert("Please fill out all fields");
return}
if (!email || email==""){alert("Please fill out all fields");
return}
if (!password || password==""){alert("Please fill out all fields"); 
return}
if (!confirmPassword || confirmPassword=="" || confirmPassword.value!==password.value){alert("Make sure passwords match!")
return}
var users = JSON.parse(localStorage.getItem('users')) || [];
var newUser = {
    name: name.value,
    email: email.value,
    password: password.value
    }
    
    users.push(newUser);
    
    localStorage.setItem('user',JSON.strignify(users));
}

//make onclick event to connect signup function to registration value//
document.getElementById("register-btn").addEventListener("click", );
