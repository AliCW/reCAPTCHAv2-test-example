# reCAPTCHAv2-test-example

Basic program to test reCAPTCHA v2 in react. If you the CAPTCHA is completed successfully or incorrectly, you'll receive a success or failure message.

## How To Install...

Clone the repo.
    
    git clone https://github.com/AliCW/reCAPTCHAv2-test-example.git

Install the required dependencies.

    npm install

Configure site key & include within .gitignore. Go to https://developers.google.com/recaptcha/intro and configure an api key pair, add localhost to the supported domains. 

## Starting ...

Navigate to recaptcha_v2_test folder and type the below to open in localhost.

    npm start

## Google confirmation...

You need to setup a backend to send user responses & your secret key to validate user input. You can change the link in Home.jsx in the handleSend() api.post function. By default for testing, this is set to http://localhost:8000/key/ for testing purposes but you can change this to whatever suitable endpoint.

See https://developers.google.com/recaptcha/intro for more details on requesting an api key pair. Your reCAPTCHA should send the users response to your backend. This should then send your secret key & the users response to Google's validation URL (https://www.google.com/recaptcha/api/siteverify) & you will receive a failure or success response.

A basic backend to locally test this can be found here: https://github.com/AliCW/reCAPTCHA-V2-BE