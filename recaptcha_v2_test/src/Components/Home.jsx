import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import siteKey from '../key/siteKey';
import axios from 'axios';

export default function Home () {
    const [recaptchaValue, setRecaptchaValue] = useState();
    const [checkResult, setCheckResult] = useState();

    const api = axios.create({
        baseURL: "/127.0.0.1:8000/",
      });

    const recaptchaRef = React.createRef();

    const handleSend = () => {

        if (recaptchaValue !== undefined) {
            return api.post('http://localhost:8000/key/', recaptchaValue.response)
                .then((response) => {
                    setCheckResult(response.data.success)
                });
        };
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const resolveValue = () => {
            return new Promise((resolve) => {
                resolve(setRecaptchaValue({'response': recaptchaRef.current.getValue()}))            
                setTimeout(() => {
                }, 2000)
            });
        };
        await resolveValue()
        .then(() => {
            handleSend();
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
                <button>DOUBLE CLICK</button>
                {checkResult === true && <p>CAPTCHA Passed</p>}
                {checkResult === false && <p>CAPTCHA Failed</p>}
                <p>This site is protected by reCAPTCHA and the Google</p>
                <a href='https://policies.google.com/privacy'>Privacy Policy</a>
                <br></br>
                <a href='https://policies.google.com/terms'>Terms of Service</a>
            </form>
        </div>
    );
};