import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import siteKey from '../key/siteKey';
import axios from 'axios';

export default function Home () {
    const [checkResult, setCheckResult] = useState();

    const api = axios.create({
        baseURL: "http://127.0.0.1:8000/",
      });

    const recaptchaRef = React.createRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const token = recaptchaRef.current.getValue()
        return api.post('http://127.0.0.1:8000/key/', token)
        .then((response) => {
            setCheckResult(response.data.success)
        });
    };

    return (
        <div>
            <h1>reCAPTCHAv2 Test</h1>
            <form onSubmit={handleSubmit}>
                <ReCAPTCHA
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}
                    ref={recaptchaRef}
                    sitekey={siteKey()}
                />
                <br></br>
                <button> TEST </button>
                {checkResult === true && <p>CAPTCHA Verification Passed</p>}
                {checkResult === false && <p>CAPTCHA Verification Failed</p>}
                <p>This site is protected by reCAPTCHA and the Google</p>
                <a href='https://policies.google.com/privacy'>Privacy Policy</a>
                <br></br>
                <a href='https://policies.google.com/terms'>Terms of Service</a>
            </form>
        </div>
    );
};