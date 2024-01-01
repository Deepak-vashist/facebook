function validate()
{
    var username = document.getElementById("uname"); 
    var password = document.getElementById("pass");

    if(username.value == "" ||password.value=="")
    {
        alert("no blank value allowed and put a strong password ");
        return false;
    }
    else{
         true;
    }
}