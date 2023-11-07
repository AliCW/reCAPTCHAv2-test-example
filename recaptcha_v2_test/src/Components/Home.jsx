import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import siteKey from '../key/siteKey';

export default function Home () {
    const [setRecaptchaValue] = useState();
    const recaptchaRef = React.createRef();

    const onSubmit =() => {
        setRecaptchaValue(this.props.onSubmit(recaptchaRef.current.getValue()));
    };

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
                    sitekey={siteKey()}
                    onChange={onSubmit}
                />
                <br></br>
                <button>RESET</button>
                <p>This site is protected by reCAPTCHA and the Google</p>
                <a href="https://policies.google.com/privacy">Privacy Policy</a>
                <br></br>
                <a href="https://policies.google.com/terms">Terms of Service</a>
            </form>
        </div>
    );
};