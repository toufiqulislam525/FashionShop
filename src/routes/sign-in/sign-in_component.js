import { signInWithGooglePopup , createUserDocumentFromAuth } from "../../utils/firebase/firebase_utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form_component";
import Button from "../../components/button/button_component";

const SignIn = ()=>{
    
    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        
    }
    
    return (
        <div>
            <h1> SIGN In Page</h1>
            <Button buttonType='google' onClick={logGoogleUser}> Sign in with Google </Button>
            <SignUpForm />
        </div>
    )

}

export default SignIn;