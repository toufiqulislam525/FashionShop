
import SignUpForm from "../../components/sign-up-form/sign-up-form_component";
import SignInForm from "../../components/sign-in-form/sign-in-form_component";
import './authentication_styles.scss';

const Authentication = ()=>{
    
   
    
    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
            
        </div>
    )

}

export default Authentication;