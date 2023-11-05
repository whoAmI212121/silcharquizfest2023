import { useState } from "react";
import Navbar from "../navbar/navbar.component";
const defaultFormfields = {
    displayName : '',
    email: '',
    password:'',
    confirmPassword:''  
}


const SignUpForm = () => {
    const [formFields, setFormFields] = useState()
    const {displayName, email, password, confirmPassword} = formFields

    const handleChange = (event) =>{
        const {name, value} = event.target

        setFormFields({...formFields, [name]:value})
    }

    return (
        <div className="bg-red-700">
            <Navbar/>
        </div>

      );
}

export default SignUpForm