console.log('Login Functionality is coming soon!');
document.getElementById('sign-in btn').addEventListener('click', function() {
    // 1- Get the username input 
    const usernameInput = document.getElementById('input-username');
    const username = usernameInput.value;
    console.log(username);

    // 2- Get the password input value
    const passwordInput = document.getElementById('input-password');
    const password = passwordInput.value;
    console.log(password);
    // 3- match username and password
        if (username === 'admin' && password === 'admin123') {
            //3-1 true:::>> alert>> homepage
            alert('Sign in successful');

            window.location.assign('./home.html');

        } else {
            //3-2 false:::>> alert>> return
            alert('Sign in Failed');
            return;
        }

});