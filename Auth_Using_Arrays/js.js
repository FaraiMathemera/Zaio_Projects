

function myFunction() {
  //variables
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var age = document.getElementById("age").value;
  var email = document.getElementById("emailad").value;
  var passwordcreate = document.getElementById("passwordcreate").value;
  var passwordconfirm = document.getElementById("passwordconfirm").value;
  
  if (passwordcreate===passwordconfirm)
  {
  var details = [name, surname, age, email, passwordconfirm];
  alert("Welldone " +name+" "+surname+" you have successfully signed up to the website ");
  window.history.back("Auth_using_arrays.html");
  }
  else
  {
  alert("Your passwords do not match!!");
  window.history.back("Auth_using_arrays.html");
  }
}

