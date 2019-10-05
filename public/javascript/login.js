/**
 * @file login.js 
 * 
 * @overview
 * This script is used to add functionality to login.html
 * Purposes: - to make the different buttons in the page usable
 * 			 - to request an authentication token from the API
 */


//selecting the required DOM elements
$("body").hide().fadeIn('500');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");  // activating the signUp form
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");  // activating the signIn form
});

document.getElementById("tmpSignIn").addEventListener('click', ()=>{
	/**
	 * @todo
	 * request a token from the API here 
	 */
	localStorage.setItem("dummy", "item");  // dummy login
	window.location.href = "/";
})