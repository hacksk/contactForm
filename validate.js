var fullname = $('#fullname').val();
var email = $('#email').val();
console.log(email);
var indexat = email.indexOf("@");
var indexdot = email.indexOf(".");
var message = $('#message').val();


$('#btnvalidate').click(function () {
    console.log(typeof email);

    if (fullname == '') {
        alert('Please enter your Full Name');
        $('#fullname').focus();
    }

    else if (indexat < 1 || (indexdot - indexat) < 2) {
        alert('Please enter a valid Email Id');
        $('#email').focus();
    }

    else if (message.length < 200) {
        alert('message is less than 200 words')
    }

    else {
        alert('We will get back to you. Thanks fot your message')
    }
});