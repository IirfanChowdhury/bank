

// get user login information

document.getElementById('submit-btn').addEventListener('click', function(){

    const userEmail = document.getElementById('user-email').value ;
    const userPassword = document.getElementById('user-password').value ;
    if(userEmail == 'zahinkhan.one@gmail.com' && userPassword == 'hogrider420'){
        window.location.href = 'banking-site.html'
    }
})