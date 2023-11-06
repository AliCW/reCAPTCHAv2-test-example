import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

export default function Home () {
    const [recaptchaValue, setRecaptchaValue] = useState();
    //console.log("here==>", process.env)

    const recaptchaRef = React.createRef();

    const onSubmit =() => {
        setRecaptchaValue(this.props.onSubmit(recaptchaRef.current.getValue()));
        //console.log(recaptchaValue)
    }
    
    return (
        <div>
            <h1>reCAPTCHAv2 Test</h1>
            <form>
                <ReCAPTCHA
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}
                    ref={recaptchaRef}
                    
                    sitekey={'env.key'}

                />
                <br></br>
                <button 
                    onChange={onSubmit}
                
                >GO
                </button>
                <p>This site is protected by reCAPTCHA and the Google</p>
                <a href="https://policies.google.com/privacy">Privacy Policy</a>
                <br></br>
                <a href="https://policies.google.com/terms">Terms of Service</a>
            </form>
        </div>
    )
}