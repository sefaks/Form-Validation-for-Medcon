
var nameError= document.getElementById("name-error");
var emailError= document.getElementById("email-error");
var phoneError= document.getElementById("phone-error");
var messageError= document.getElementById("message-error");
var submitError= document.getElementById("submit-error");

function validateName(){

    var name= document.getElementById('contact-name').value;

    if (name.length ==0){

        nameError.innerHTML="Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        
        nameError.innerHTML = "This is not allowed type for name.";
        return false;
    }
    else{
        nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
        return true;
    }
    
}

function validatePhoneNumber() {
    var phoneNumber = document.getElementById('contact-number').value;
    
    if (phoneNumber.length == 0) {
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }

    // Telefon numarasındaki boşlukları kaldır
    phoneNumber = phoneNumber.replace(/\s/g, '');

    if (phoneNumber.length != 10) {
        phoneError.innerHTML = "Phone number should be 10 digits";
        return false;
    }
    
    if (!phoneNumber.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Invalid phone number format";
        return false;
    } else {
        phoneError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
        return true;
    }
}

function validateMail(){

    var email =  document.getElementById('email-text').value;
    
        // E-posta adresi için geçerli bir regular expression
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Eğer e-posta adresi regular expression ile eşleşiyorsa, geçerli kabul edilir
        if (emailRegex.test(email)) {
            emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
            return true;

        } else {
            emailError.innerHTML="invalid email type"
            return false;
        }
    }
    


   function validateMessage(){

        var message= document.getElementById("message-text").value;
        var required=30;
        var left= required - message.length;

        if(left>0){
            messageError.innerHTML= left + " more characters required.";
            return false;
        }

        messageError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
        return true;
    }

    function validateForm(){
        if (!validateMessage() || !validateMail() || !validateName() || !validatePhoneNumber()) {
            submitError.style.display = "block";
            submitError.innerHTML = "Form is can't submit. Please fix errors.";
            setTimeout(function(){submitError.style.display = 'none';},5000);
            return false;
        } else {
            submitError.style.display = "none"; 
            return true;
        }
    }
    




