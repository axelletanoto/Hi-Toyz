const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

function validateForm(event){
    
    event.preventDefault();

    var errorMessage = document.getElementById('errorMessage')
    errorMessage.innerHTML = ''

    var fullname = document.getElementById('fullname1').value
    var username = document.getElementById('username1').value
    var email = document.getElementById('email1').value
    var phoneNumber = document.getElementById('phoneNumber1').value
    var password1 = document.getElementById('password1').value
    var confirmPassword1 = document.getElementById('confirmPassword1').value
    var country = document.getElementById('country1').value

    var isValid = true

    if(username.length < 6)
    {
        alert('Username must be more than 6 characters!')
        isValid = false
    }

    if(fullname.length < 6)
    {
        alert('Fullname must be more than 6 characters!')
        isValid = false
    }

    if(isValidEmail(email) == false)
    {
        alert('Email is Invalid!')
        isValid = false
    }

    if(isNumeric(phoneNumber) == false)
    {
        alert('Phone number is not numeric!')
        isValid = false
    }

    if(isAlphanumeric(password1) == false)
    {
        alert('Password is not alphanumeric!')
        isValid = false
    }

    if(password1 != confirmPassword1)
    {
        alert('Confirm password must be the same as password!')
        isValid = false
    }

    if(country == "")
    {
        alert('Country must be chosen!')
        isValid = false
    }

    if(isValid == false)
    {
        errorMessage.innerHTML = "Please submit the correct form!"
    }
    else
    {
        //document.getElementById('form').submit()
        window.location.href = './index.html'
    }

}

function isAlphanumeric(password1){
    var huruf = false
    var angka = false
    var simbol = false

    for(let index = 0; index < password1.length; index++)
    {
        if(password1[index] >= 'a' && password1[index] <= 'z')
        {
            huruf = true
        }
        else if(password1[index] >= 'A' && password1[index] <= 'Z')
        {
            huruf = true
        }
        else if(password1[index] >= '0' && password1[index] <= '9')
        {
            angka = true
        }
        else
        {
            simbol = true
        }
    }

    if(simbol == true)
    {
        return false
    }
    else if(angka == true && huruf == true)
    {
        return true
    }
    else
    {
        return false
    }
}

function isValidEmail(email){
    if(email.indexOf('@') == '-1')
    {
        return false
    }

    if(email.indexOf('@') == '0')
    {
        return false
    }
    
    if(email.indexOf('.') == '-1')
    {
        return false
    }

    if(email.indexOf('.') == '0')
    {
        return false
    }

    if(email == '')
    {
        return false
    }

    return true
}

function isNumeric(phoneNumber){
    for(let index = 0; index < phoneNumber.length; index++)
    {
        if(phoneNumber[index] >= '0' && phoneNumber[index] <= '9')
        {
            return true
        }
        else
        {
            return false
        }
    }
}