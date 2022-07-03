document.cookie = "username=me@me.com"
document.cookie = "password=super_safe_password"

if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', ready)
} else {
	ready()
}

/* Shown below "innerText" stops users from inputing scripts into the site*/

function ready() {
	var query = new URL(window.location).searchParams.get('query')
	document.getElementById('query-input').value = query
	document.getElementById('query-output').innerText = query
}

/* With login information you can use this function below to only allow users to enter valid email addresses */

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}