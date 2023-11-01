import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase_utils";
import FormInput from '../form-input/form-input_component';
import Button from "../button/button_component";
import './sign-up-form_styles.scss';

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

            switch(error.code){
                case password_problem:
                    alert('Please enter valid password');
                    break;
                
                case already_in_use:
                    alert('Email already in Use');
                    break;
                
                default :
                    alert(error.code.slice(5).toUpperCase());
            }
            
            

        }
        
        

    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account ? </h2>
            <span>Sign up with ur email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput label='Name' type="text" required onChange={handleChange} name="displayName" value={displayName} />
                <FormInput label='Email' type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label='Password' type="password" required onChange={handleChange} name="password" value={password} />
                <FormInput label='Confirm Password' type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <Button buttonType='inverted' type='submit'> Sign Up </Button>

            </form>

        </div>
    );
}

export default SignUpForm;