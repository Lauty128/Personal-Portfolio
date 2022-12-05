//-------------- Import
import { useState, useRef } from "react"

//-------------- Interface
import { formValuesInterface } from "../interface"

//-------------- Styles
import styles from "../styles/ContactMe.module.css"

export default function ContactMe(){

    const form = useRef(null)

    const defaultFormValues = {
        name:"",
        email:"",
        linkedin:"",
        message:""
    }

    const [values , setValues] = useState<formValuesInterface>(defaultFormValues)

    const changeValue = (e:any) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    const submitForm = (e:any) => {
        e.preventDefault()
        // function that submits the data
        setValues(defaultFormValues)
    }

    return(
    <section className={styles.container} id="ContactMe">
        
        <h2 className={styles.h2}>CONTACTAME</h2>

        <form action="" className={styles.form} onSubmit={submitForm} ref={form}>

            <div className={styles.inputContainer}>
                <label htmlFor="inputName" className={styles.label}>*Nombre</label>
                <input type="text" name="name" id="inputName" onChange={changeValue} 
                value={values.name} className={styles.input} />
            </div>

            <div className={styles.inputContainer}>
                <label htmlFor="inputName" className={styles.label}>*Correo Electronico</label>
                <input type="text" name="email" id="inputName" onChange={changeValue} 
                value={values.email} className={styles.input} />
            </div>

            <div className={styles.inputContainer}>
                <label htmlFor="inputName" className={styles.label}>Linkedin</label>
                <input type="text" name="linkedin" id="inputName" onChange={changeValue} 
                value={values.linkedin} className={styles.input} />
            </div>
            
            <div className={styles.inputContainer}>
                <label htmlFor="inputMessage" className={styles.label}>*Mensaje</label>
                <textarea name="message" id="inputMessage" onChange={changeValue} 
                value={values.message} className={`${styles.input} ${styles.textarea}`}>
                </textarea>
            </div>

            <input type="submit" value="ENVIAR" className={styles.submit} />

        </form>

    </section>
    ) 
}