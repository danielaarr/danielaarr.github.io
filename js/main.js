const submit = document.getElementById("submit");
const $alert_container = document.getElementById("alert-container");
const contact_name = document.getElementById("cliente");
    const contact_email = document.getElementById("correocliente");
    const contact_message = document.getElementById("mensajitoparami");
const phoneRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/
const emailRegEx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
let message;

function taskcompleted (stateMail, message){
  Swal.fire({
      position: "top-end",
      icon: stateMail,
      title: message,
      showConfirmButton: false,
      timer: 1500
    });

  contact_name.value="";
  contact_email.value="";
  contact_message.value="";
}//taskCompleted

function cleanWarnings(){
  $alert_container.innerHTML = "";
  contact_name.style.border="";
  contact_email.style.border="";
  contact_message.style.border="";
}//cleanWarnings

function cleanForm(){
  contact_name.style.border="";
  contact_email.style.border="";
  contact_message.style.border="";
  contact_name.value="";
  contact_email.value="";
  contact_message.value="";
  contact_name.focus();
}//clean Form

function showErrorMessage (lblError, msj_error){
  lblError.style.border="solid thin red";
  let showAlert = 
    `<div class="alert alert-danger" role="alert">
    ${msj_error} </div>`;
    $alert_container.insertAdjacentHTML("beforeend",showAlert)
    $alert_container.focus();
}//showErrorMessage

function validateContact(contact_name, contact_email, contact_message){
  
  if (contact_name.value.trim().length < 3) {
    message = "Please write your Full Name";
    showErrorMessage(contact_name, message);
    return false;
  
  } 
  if (!emailRegEx.test(contact_email.value) || contact_email.value.trim().length < 8) {
    message="Please write a correct email address. ex//'user@domain.com'.";
    showErrorMessage(contact_email, message);
    return false;
  }
  
  if (contact_message.value.trim().length < 20) {
    message="Message must be longer than 20 characters";
    showErrorMessage(contact_message, message);
    return false;
  }
  return true;
}//validateContact

const serviceID = 'service_v9v2idf'; // cambiar por tu service ID - emailjs
const templateID = 'template_e4v9hom';

//SEND EMAIL FROM CONTACT FORM
submit.addEventListener('click', function (event) {
    event.preventDefault();
    cleanWarnings();
    const contact_name = document.getElementById("cliente");
    const contact_email = document.getElementById("correocliente");
    const contact_message = document.getElementById("mensajitoparami");
    
    const isValid = validateContact(contact_name, contact_email, contact_message);

    if (isValid) {
      (function () {
        emailjs.init('C5KCJGO0PP8YV8shG');
      })();

      let form = document.getElementById("form-contacto");
      emailjs.sendForm(serviceID, templateID, form)
        .then(function () {
          console.log('SUCCESS!');
          taskcompleted( "success", "Message has been send it succesfully");   
          cleanForm();       
        }, function (error) {
          console.log('FAILED...', error);
          taskcompleted( "error", "Please try again");          
        });
      }//if is valid 
  });//SUBMIT addEvenListener
