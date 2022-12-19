import { expRegularInterface, formValuesInterface } from "../interface";

const expRegular:expRegularInterface = {
    name:/^[a-zA-Z _-]{5,30}$/,
    email: /^[\w]+@{1}[\w]+\.[a-z]{2,3}$/
}

const validate = (name:string, value:string) => {

    switch (name){
        case "name":
            if(expRegular.name.test(value)) return true
            return false
        break;

        case "email":
            if(expRegular.email.test(value)) return true
            return false
        break;

        case "message":
            if(value.length > 80 && value.length < 3000) return true
            return false
        break;
    }
}

//-------------------- Validation of linkedin with <split()> and <length == 0> in case it is empty

const validateInput =(input:any, value:string, style:string)=>{

    if(input.name == "linkedin") return

    if(!validate(input.name, value)) return input.previousElementSibling.classList.add(style)
        
    if(input.previousElementSibling.classList.contains(style)) input.previousElementSibling.classList.remove(style)
}

const validateForm = (data:formValuesInterface) => 
    (validate("name", data.name) && validate("email", data.email) && validate("message", data.message))
    

const formError = (button:HTMLInputElement | null , errorFormClass:string) =>{
    button?.classList.add(errorFormClass);
    setTimeout(()=>{ button?.classList.remove(errorFormClass) }, 200 )
}

export{
    validateInput,
    validateForm,
    formError
}