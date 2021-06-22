//Creation of DOM for UserName, email, pwd, conPwd and form
let userName = document.getElementById("txtUserName");
let email = document.getElementById("txtEmail");
let pwd = document.getElementById("txtPwd");
let conPwd = document.getElementById("txtConPwd");
let form = document.getElementById("form");

 //Create event on the button linking it to the validateInput funtion
 document.querySelector("button")
 .addEventListener("click",(event)=> {
 event.preventDefault();
 validateInput();
 });  

//Creation of Validation Check Function for the UserName, email, pwd, conPwd fields
function validateInput(){
    //check username is empty
    if(userName.value.trim()===""){
      onError(userName,"User Name cannot be Empty");
    }

    //Execute if Username field is not empty
    else{
        onSuccess(userName);
    }

    //Execute if the email field is empty
    if(email.value.trim()===""){
        onError(email, "Email cannot be empty");
    }

    //Execute if the email field is not in Email format having @ sign
    else if(!isValidEmail(email.value.trim())){
            onError(email, "Email is not valid");
        }

    //Execute if the email field is correctly filled according to email format
        else{
            onSuccess(email);
        }

  //Execute when the password field is empty
if(pwd.value.trim()===""){
    onError(pwd,"Password cannot be empty");
  }

  //Execute when the password field is filled
  else{
      onSuccess(pwd);
  }

  //Execute when the password field is empty
  if(conPwd.value.trim()===""){
      onError(conPwd, "Confirm Password cannot be empty");
  }

  //Check the password and confirm password, execute if they dont match
 else if(pwd.value.trim()!==conPwd.value.trim()){
        onError(conPwd, "Password & Confirm Password not Matching")
 }

 //Execute if they match
    else{
          onSuccess(conPwd);
      }
    }
   
// Run and hide error message when the fields are currently field
function onSuccess(input){
    let parent =input.parentElement;
    let messageEle=parent.querySelector("small") ;
    messageEle.style.visibility = "hidden";
    parent.classList.remove("error");
    parent.classList.add("success");
} 

// Run and show error message when the fields are currently field
function onError(input, message){
    let parent =input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility = "visible";
    messageEle.innerText = message;
    parent.classList.add("error");
    parent.classList.remove("success");
} 

//Email validation / check
function isValidEmail(email){
return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}  

