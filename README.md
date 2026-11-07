##Setup 

Due to the way the project is setup for security, you will need to provide your own API token in order for the application to function.

## INCLUDE MORE SETUP INSTRUCTIONS PRIOR TO ENV SETUP

1. Clone the repository down locally, i will provide both a zip file and a link to the public github.
2. Run 'npm install' from inside the project folder named 'react'
3. Once complete, run 'npm run dev' to run the project locally.

The API will not work and the app may error, please use the following steps to remedy:

1. Create a .env file on the same level as `src` and `public`
2. Copy the 'VITE_API_TOKEN' variable from `.env.example` to `.env`, this is the only env variable used
3. Please navigate to 'https://currencybeacon.com/account/dashboard' and grab your own API key
4. Add your own API token to `.env`
5. The app should now function without errors



## Given more time I would've made the following changes: 

- Made it more visually appealing via more in depth tailwind styling
- Attempting to split components rather than all in app.jsx. Creating a reusable card for currency would be my next step.
lack of aria tags and labels etc, so I would add those in future.
- I did also notice that the the hover effect on the 'convert' button wasnt working as intended, the 
cursor would not change state on hover of the button, this would need resolved. One step I took to semi-remedy this was by adding a border around the button, since, it currently doesnt visually look like a button.
- Due to wanting to get the functionality nailed down, it doesnt perform very well on mobile, and although 
I should have developed mobile first, I couldnt spend too much time on this sadly.


## This app consists of the following:

- React v19.3.1
- tailwindcss v4.3.4
- Vite v8.3.5
