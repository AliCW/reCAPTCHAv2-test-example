# reCAPTCHAv2-test-example

Basic program to test reCAPTCHA v2 in react. 

## How To Install...

Clone the repo
    
    git clone https://github.com/AliCW/reCAPTCHAv2-test-example.git

Install the required dependencies

    npm install

Configure site key & include within .gitignore. Go to https://developers.google.com/recaptcha/intro and configure an api key pair, add localhost to the supported domains. To run this program, create a folder called 'key' in 'src', create a file called 'siteKey.js' and add the below code, inserting your site key

    export default function siteKey() {
        const siteKey = "<insert-your-site-key>"
        return siteKey;
    };

## Starting ...

Navigate to recaptcha_v2_test folder and type the below to open in localhost 

    npm start

