function checkemail(email){
	if(email.startsWith("@") || email.startsWith(".")){
		return false;
	}
	else if(email.endsWith("@") || email.endsWith("."))	{
		return false;
	}
	else if(email.indexOf("@.") > -1 || email.indexOf(".@") > -1 )
	{
		return false;
	}
	else if(email.indexOf("@") < 0 || email.indexOf(".") < 0)
	{
		return false;
	}
		else
	{
		return true;
	}
}

function checkaddress(address){
 if(address.indexOf("Street")<0){
    return false;
 }
}

function login(){
	var password = document.getElementById('passworde').value;
	var email = document.getElementById('emaile').value;
	
	if(email == ""){
		alert("Email cannot be left empty");
		return false;
	}
	else if(password == ""){
		alert("Password cannot be left empty");
		return false;
    }
    // else if(cekEmail(email) == false){
	// 	alert("Invalid Email Format");
    //     return false;
    // }
	else{
		alert("Login success!");
		location.reload();
	}	
}

function register(){
    var name = document.getElementById('nameu').value;
    var email = document.getElementById('emailu').value;
    var male = document.getElementById('gm');
    var female = document.getElementById('gf');
    select = document.getElementById('city');
	var password= document.getElementById('passworde').value;
	var confirmpassword= document.getElementById('confirmpassworde').value;

    if(name == ""){
        alert("Name cannot be left empty");
        return false;
    }
    else if(email == ""){
        alert("Email cannot be left empty");
		return false;
    }
    else if(checkemail(email) == false){
		alert("Invalid Email Format");
        return false;
    }

    else if(male.checked == false && female.checked == false){
        alert("Please select gender");
    }

    else if (select.value == ""){
        alert("Please select city");
        return false;
    }

	else if(password == ""){
		alert("Password cannot be left empty");
		return false;
	}
	else if(password.length < 8){
		alert("Password must be 8 characters or more");
		return false;
	}
	else if(password !== confirmpassword){
		alert("Password does not match");
		return false;
	}
    else{
		alert("Register success! Please check your email.");
		location.reload();
	}







}