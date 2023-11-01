import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase_utils";
import FormInput from '../form-input/form-input_component';


const defaultFormFields = {
    displayName:'',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = ()=>{

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName , email, password, confirmPassword} = formFields;

    const resetFormFields = ()=>{
        setFormFields(defaultFormFields);
    }

    const handleChange = (event)=>{
        const {name, value} = event.target;
        setFormFields({...formFields, [name] : value});

    };

    const handleSubmit = async (event)=>{
        event.preventDefault();
        if (password !== confirmPassword){
            alert('passwords do not match');
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            await createUserDocumentFromAuth(user,{displayName});
            resetFormFields();

        }catch(error){
            const password_problem = 'auth/weak-password';
            const already_in_use = 'auth/email-already-in-use';

            let error_message = '';
            if (error.code === already_in_use){
                if(error_message){error_message+=' and ' }
                error_message = error_message + 'Email already in Use';
            }
            if (error.code === password_problem){
                if(error_message){error_message+=' and ' }
                error_message = error_message + 'Please enter valid Password';
            }
            
            alert(error_message);
            

        }
        
        

    }

    return (
        <div>
            <h1>Sign up with ur email and password</h1>
            <form onSubmit={handleSubmit}>
                
                <FormInput label='Name' type="text" required onChange={handleChange} name="displayName" value={displayName} />
                <FormInput label='Email' type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label='Password' type="password" required onChange={handleChange} name="password" value={password} />
                <FormInput label='Confirm Password' type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <button type='submit'> Sign Up </button>

            </form>

        </div>
    );
}

export default SignUpForm;