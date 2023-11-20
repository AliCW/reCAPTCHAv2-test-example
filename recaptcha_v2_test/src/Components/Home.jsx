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
        const token = recaptchaRef.current.getValue();
        return api.post('http://127.0.0.1:8000/key/', token)
        .then((response) => {
            setCheckResult(response.data.success);
        });
    };

    return (
        <div>
            <h1 className="header">reCAPTCHA v2 Test</h1>
            <form onSubmit={handleSubmit}>
                <ReCAPTCHA
                    className="recaptcha"
                    ref={recaptchaRef}
                    sitekey={siteKey()}
                />
                <br></br>
                <button className="submit-button"> TEST </button>
                {checkResult === true && <p className="text-pass">reCAPTCHA v2 Verification Check Passed</p>}
                {checkResult === false && <p className="text-fail">reCAPTCHA v2 Verification Check Failed</p>}
                <p className="text">This site is protected by reCAPTCHA and Google</p>
                <a className="link-button" target="_blank" rel="noreferrer" href='https://policies.google.com/privacy'>Privacy Policy</a>
                <br></br>
                <a className="link-button" target="_blank" rel="noreferrer" href='https://policies.google.com/terms'>Terms of Service</a>
            </form>
        </div>
    );
};