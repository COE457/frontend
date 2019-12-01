/**
 * @file login.js 
 * 
 * @overview
 * This script is used to add functionality to login.html
 * Purposes: - to make the different buttons in the page usable
 * 			 - to request an authentication token from the API
 * 
 * @copyright https://codepen.io/FlorinPop17/pen/vPKWjd
 * 
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

document.getElementById("signInBtn").addEventListener('click', e => {
	e.preventDefault();
	$.ajax({
		url: 'http://localhost:3001/API/login',
		type: 'post',
		contentType: 'application/json',
		data: JSON.stringify({
			"username": $("#username").val(),
			"password": $("#password").val()
		}),
		success: function( data, textStatus, jQxhr ){
			console.log('data: ', data);
			localStorage.setItem("userID", $("#username").val());
			localStorage.setItem("token", data.token);
			window.location.href = "/";
			
		},
		error: function( jqXhr, textStatus, errorThrown ){
			alert("wrong username or password")
		}
	});
	
})


document.getElementById("signUpBtn").addEventListener('click', e =>{
	e.preventDefault();
	var body = {
		
		_id: $("#usernameSU").val(),
		email: $("#emailSU").val(),
		password: $("#passwordSU").val(),
		phoneNumber: $("#phoneNumberSU").val(),
	}

	$.ajax({
		url: 'http://localhost:3001/API/parent/create',
		dataType: 'json',
		type: 'post',
		contentType: 'application/json',
		data: JSON.stringify(body),
		processData: false,
		success: function( data, textStatus, jQxhr ){
			alert("User added successfully. Please login to continue")
			window.location.href = "/";
		},
		error: function( jqXhr, textStatus, errorThrown ){
			console.log(errorThrown);
		}
	});
})