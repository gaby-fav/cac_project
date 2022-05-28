'use strict'

//  $(document).ready(function(){

//      $('body').on({'mousemove' : function( e ){
//          console.clear()
//          let clientX = e.originalEvent.clientX
//          let clientY = e.originalEvent.clientY
//          $('#cursor').css({
//              'left' : (clientX - 40) + 'px',
//              'top' : (clientY - 40) + 'px'
//          })
//      }})

//      $('.a').on({
//          'mouseover': function(){
//              $('#cursor').addClass('mini')
//          },
//          'mouseout': function(){
//             $('#cursor').removeClass('mini')

//          },
//     })
//  })

 const formulario = document.getElementById('contacto');
 const inputs = document.querySelectorAll('#contacto input');


 const expresiones = {
     name:/^[a-zA-ZÀ-ÿ\s]{1,40}$/, //letras y espacios, acepta acentos
     email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
     phone: /^\d{7,14}$/ //7 a 14 numeros
 }

 const campos ={
     name: false,
     email: false,
     phone: false
 }
const validarFormulario = (e)=>{
    switch (e.target.name){
        case "name":
            validarCampo(expresiones.name, e.target,'name')
           
        break;
        case "email":
            validarCampo(expresiones.email, e.target,'email')
            
            break;
        
        case "phone":
            validarCampo(expresiones.phone, e.target,'phone')
            
        break;

        
    }

}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`group_${campo}`).classList.remove('contact_group_status_error');
        document.getElementById(`group_${campo}`).classList.add('contact_group_status_ok');
        document.querySelector(`#group_${campo} svg`).classList.remove('fa-circle-xmark');
        document.querySelector(`#group_${campo} svg`).classList.add('fa-circle-check');
        document.querySelector(`#group_${campo} .contact_input_error`).classList.remove('contact_input_error_active');
        campos[campo] = true;
    }else{
        document.getElementById(`group_${campo}`).classList.add('contact_group_status_error');
        document.querySelector(`#group_${campo} svg`).classList.add('fa-circle-xmark');
        document.getElementById(`group_${campo}`).classList.remove('contact_group_status_ok');
        document.querySelector(`#group_${campo} svg`).classList.remove('fa-circle-check');
        document.querySelector(`#group_${campo} .contact_input_error`).classList.add('contact_input_error_active');
        campos[campo] = false;
    }

}

 inputs.forEach((input)=>{
     input.addEventListener('keyup',validarFormulario);
     input.addEventListener('blur',validarFormulario);
 });
 
 formulario.addEventListener('submit',(e)=>{
     e.preventDefault();
     if(campos.name && campos.email && campos.phone){
         formulario.reset();
         document.getElementById('message_send_ok').classList.add('message_send_ok_active')

     }
 });



