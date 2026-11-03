##Setup 

Due to the way the project is setup for security, you will need to provide your own API token in order for the application to function.

## INCLUDE MORE SETUP INSTRUCTIONS PRIOR TO ENV SETUP

1. Clone the repository down locally, i will provide both a zip file and a link to the public github.
2. Run 'npm install' from inside the project
3. Once complete, run 'npm run dev' to run the project locally.

The API will not work and the app may error, please use the following steps to remedy:

1. Copy `.env.example` tokens to `.env` (this will only consist of 1, the api token)
2. Please navigate to 'https://currencybeacon.com/account/dashboard' and grab your own API key
4. Add your own API token to `.env`



## Given more time I would've made the following changes: 

- Made it more visually appealing via more in depth tailwind styling
- Currently, the app is keyboard accessible out of the box. But, screenreaders may have a hard time due to 
lack of aria tags and labels etc, so I would add those in future.
- I did also notice that the the hover effect on the 'convert' button wasnt working as intended, the 
cursor would not change state on hover of the button, this would need resolved.
- A user is currently able to select 2 of the same currencies,
- Due to wanting to get the functionality nailed down, it doesnt perform very well on mobile, and although 
I should have developed mobile first, I couldnt spend too much time on this sadly.


## This app consists of the following:

- React v19.3.1
- tailwindcss v4.3.4
- Vite v8.3.5
