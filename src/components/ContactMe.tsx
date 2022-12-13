//-------------- Import
import { useState, useRef } from "react"
import emailJs from '@emailjs/browser'
import { validateInput, validateForm, formError } from "../utils/validateForm"

//-------------- Interface
import { formValuesInterface, messageCard } from "../interface"

//-------------- Styles
import styles from "../styles/ContactMe.module.css"


export default function ContactMe(){

    const defaultFormValues = {
        name:"",
        email:"",
        linkedin:"",
        message:""
    }

    //---------------------- Change and Validate values
    const [values , setValues] = useState<formValuesInterface>(defaultFormValues)

    const changeValue = (e:any):void => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]:value
        })
        validateInput(e.target, value, styles.inputError)
    }

    //---------------------- Submit Form
    const submitButton = useRef<HTMLInputElement | null>(null)

    const submitForm = (e:any):void => {
        e.preventDefault()
        const { name, email, linkedin, message } = values
        if(!validateForm(values)){
            newMessage({
                message:'Hubo un campo que no se valido correctamente. Porfavor revise los datos',
                type:'error'
            })
            formError(submitButton.current , styles.formError);
            return
        }
        //--- Else
        const templateParams:any = {
            name,
            email,
            linkedin,
            message
        }

        submitButton.current?.classList.add(styles.submitBlock)
        emailJs.send('service_cq5dm6m', 'template_bvyosdm' , templateParams , '7W6DBOmDsZB4m10Pk')
            .then(response=>{
                if(response.status == 200){
                    newMessage({
                        message:'Su mensaje fue enviado correctamente. En breves podre comunicarme con usted',
                        type:'OK'
                    })
                    setValues(defaultFormValues)
                    submitButton.current?.classList.remove(styles.submitBlock)
                }
            })
            .catch(err=>{
                newMessage({
                    message:'Ocurrio un error mientras se enviaba el mensaje. Porfavor vuelve a intentarlo mas tarde',
                    type:'error'
                })
                submitButton.current?.classList.remove(styles.submitBlock)
            })
    }

    //------------------------------ Message Card
    const Message = useRef<HTMLDivElement | null>(null)

    const newMessage = (data:messageCard)=>{
        //-------- A dynamic message box is created here
        if(Message.current != null){ 
            let p:any = Message.current.firstElementChild  //Reference to <p></p>
            p.textContent = data.message

            const messageBox = Message.current // Message Box <div></div>
            if(data.type == 'error'){
                messageBox.classList.add(styles.messageError)
                messageBox.classList.add(styles["message--active"])

                setTimeout(()=>{ messageBox.classList.remove(styles["message--active"]) }, 2000)
                setTimeout(()=>{ messageBox.classList.remove(styles.messageError) }, 2400)
                return
            }
            messageBox.classList.add(styles["message--active"])
            setTimeout(()=>{ messageBox.classList.remove(styles["message--active"]) }, 2000)
        }
    }


    return(
    <section className={styles.container} id="ContactMe">
        
        <h2 className={styles.h2}>CONTACTAME</h2>

        <form action="" className={styles.form} onSubmit={submitForm}>

            <div className={styles.inputContainer} data-aos="fade-left" data-aos-duration="800" >
                <label htmlFor="inputName" className={styles.label}>*Nombre</label>
                <input type="text" name="name" id="inputName" onChange={changeValue} 
                value={values.name} className={styles.input}/>
            </div>

            <div className={styles.inputContainer} data-aos="fade-left" data-aos-duration="800" >
                <label htmlFor="inputName" className={styles.label}>*Correo Electronico</label>
                <input type="text" name="email" id="inputName" onChange={changeValue} 
                value={values.email} className={styles.input} />
            </div>

            <div className={styles.inputContainer} data-aos="fade-left" data-aos-duration="800" >
                <label htmlFor="inputName" className={styles.label}>Linkedin</label>
                <input type="text" name="linkedin" id="inputName" onChange={changeValue} 
                value={values.linkedin} className={styles.input} />
            </div>
            
            <div className={styles.inputContainer} data-aos="fade-left" data-aos-duration="800" >
                <label htmlFor="inputMessage" className={styles.label}>*Mensaje</label>
                <textarea name="message" id="inputMessage" onChange={changeValue} 
                value={values.message} className={`${styles.input} ${styles.textarea}`}>
                </textarea>
            </div>

            <input type="submit" value="ENVIAR" className={styles.submit} 
            data-aos="zoom-out" data-aos-duration="700" ref={submitButton} />

        </form>

        <div className={styles.message} ref={Message}>
            <p></p>
        </div>

    </section>
    ) 
}