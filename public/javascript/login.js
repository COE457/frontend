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

document.getElementById("tmpSignIn").addEventListener('click', e => {
	/**
	 * @todo
	 * implement properly
	 */
	e.preventDefault();
	$.ajax({
		url: 'http://localhost:3001/API/parent/read',
		type: 'get',
		contentType: 'application/json',
		data: {
			"username": "parent1"
		},
		success: function( data, textStatus, jQxhr ){
			if(data.docs.length > 0){
				alert("Login successful");
				localStorage.setItem("userID", data.docs[0]._id);
				localStorage.setItem("username", "parent1");
			}
			window.location.href = "/";
			
		},
		error: function( jqXhr, textStatus, errorThrown ){
			console.log(errorThrown);
			window.location.href = "/";
		}
	});
	
})


document.getElementById("tmpSignUp").addEventListener('click', ()=>{
	var body = {
		username: $("#username")[0].value,
		email: $("#email")[0].value,
		password: $("#password")[0].value,
		phoneNumber: $("#phoneNumber")[0].value,
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