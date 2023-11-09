import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import siteKey from '../key/siteKey';
import secretKey from '../key/secretKey';
import axios from "axios";

export default function Home () {
    const [recaptchaValue, setRecaptchaValue] = useState();
    const [recaptchaKey, setRecaptchaKey] = useState();

    //const [widgetId, setWidgetId] = useState();
    const [input, setInput] = useState();

    const recaptchaRef = React.createRef();



    const handleSend = (value) => {
        if (recaptchaValue !== undefined) {
            const baseURL = "https://www.google.com/recaptcha/api/siteverify";
            console.log("dwarf", baseURL,
                recaptchaKey,
                recaptchaValue,)

            return axios
                .post(baseURL,
                    recaptchaKey,
                    recaptchaValue,)
                .then((request, response) => {
                    console.log("req===", request)
                    console.log("resp", response);
                })
        }

    }



    const handleSubmit = async (event) => {

        event.preventDefault();

        const resolveValue = () => {
            return new Promise((resolve, reject) => {
                console.log("2")
                resolve(setRecaptchaValue({"response": recaptchaRef.current.getValue()}))            
                setTimeout(() => {
                    
                    
                }, 2000)
            })
        }

        // const resolveWidgetId = () => {
        //     return new Promise((resolve) => {
        //         console.log("3")
        //         setWidgetId(recaptchaRef.current.getWidgetId())
        //         setTimeout(() => {
        //             resolve('completed')
        //         }, 10000)
        //     })
        // }

        console.log("1")
        //resolveValue();
        //await resolveWidgetId()
        

        setRecaptchaKey({"secret": secretKey()})
        //setRecaptchaValue(recaptchaRef.current.getValue())
        resolveValue()
        .then((values) => {
            
            console.log("thenblock--->>>", recaptchaValue)
            handleSend();

        })

        
        //console.log("widgetID ---->>>", widgetId);    
    }




    //if(recaptchaValue !== undefined) return <p>{recaptchaValue}</p>

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
                    onChange={(event) => setInput(event.target.value)}
                    
                />
                <br></br>
                <input placeholder="check"></input>
                <button >CHECK</button>
                <p>This site is protected by reCAPTCHA and the Google</p>
                <a href="https://policies.google.com/privacy">Privacy Policy</a>
                <br></br>
                <a href="https://policies.google.com/terms">Terms of Service</a>
            </form>
        </div>
    );
};