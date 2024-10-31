function redirectToLandingPage() {
    window.location.href = "index.html";
}

function login() { 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === 'password') {
        localStorage.setItem('LoggedInUser', username);
        window.location.href = "account.html";
    } else {
        alert('Invalid credentials');
    }
}

window.onload = function() {
    const loggedInUser = localStorage.getItem('LoggedInUser');
    if (loggedInUser) {
        redirectToLandingPage();
    }
}