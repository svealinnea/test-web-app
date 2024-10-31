function logout() { 
    localStorage.removeItem('LoggedInUser');
    window.location.href = 'index.html';
}

window.onload = function() { 
    const loggedInUser = localStorage.getItem('LoggedInUser');
    if (!loggedInUser) {
        window.location.href = 'index.html';
    } else {
        document.getElementById('userDisplay').innerText = loggedInUser;
    }
}
