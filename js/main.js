document.addEventListener("DOMContentLoaded", function(){
  //Get the modal
  var modal = document.body.querySelector('.modal')
  //Get the button that opens the modal
  var button = document.body.querySelector('.signin')
  //Get the botton to close the modal
  var gs = document.body.querySelector(".getstarted .close")
  //Add the error class to username and Password
  var username = document.body.querySelector('#user')
  var user_error = username.classList.add('error')

  var password = document.body.querySelector('#pass')
  var password_error = password.classList.add('error')
  //Get something that closes the modal???
  button.addEventListener("click", function () {modal.style.display = "block"});

  // //close the modal
  gs.addEventListener("click", function(){
    modal.style.display = "none";
  });

  username.addEventListener("mouseover", function() {
    if(username.classList.contains("error")){
      username.classList.remove("error");
    }
  });

  password.addEventListener("mouseover", function() {
    if(password.classList.contains("error")){
      password.classList.remove("error");  
    }
  });


//
});
