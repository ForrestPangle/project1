window.addEventListener("DOMContentLoaded", setupForm);

function setupForm(){
	const form = document.getElementById("login-form");
	form.addEventListener("submit", handleSubmit);
}//setupForm

function handleSubmit(event){
	event.preventDefault();

	const {
		username,
		password,
		login_type,
		result
	} = event.target;

	const processUser = login_type.value == "register" ? registerUser : loginUser;
	const response    = processUser(username.value, password.value);
	result.innerHTML  = response;
}//handleSubmit

function registerUser(username, password){
	window.localStorage.setItem("exampleLogin__username", username);
	window.localStorage.setItem("exampleLogin__password", password);

	return `New user ${username} now registered!`;
}//registerUser

function loginUser(username, password){
	const registeredUser     = window.localStorage.getItem("exampleLogin__username");
	const registeredPassword = window.localStorage.getItem("exampleLogin__password");

	const validUser     = username == registeredUser;
	const validPassword = password == registeredPassword;

	if(validUser && validPassword){
		window.location = "https://forrestpangle.github.io/project1/index2.html"
	}
        else if(!validUser)     return `Username ${username} has not been registered. `;
	else if(!validPassword) return `Incorrect password for username ${username}`;
}//loginUser