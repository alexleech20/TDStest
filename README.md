##Setup 

Due to the way the project is setup for security, you will need to provide your own API token in order for the application to function.

## SETUP INSTRUCTIONS

Requires node v22 (check with `node -v`)

1. Clone the repository down locally or unzip the file, i will provide both a zip file and a link to the public github.
2. check you are inside 'react' folder, `cd react`
3. Run `npm install`
4. Create the .env file (copy .env.example, then add your API token `VITE_API_TOKEN=your_token_here`)
5. Once complete, run `npm run dev`
6. API requests go through the vite dev proxy, to avoid errors you must use `npm run dev`

The app uses the CurrencyBeacon API, which needs a free API token. I haven’t included mine for security reasons, so you’ll need your own.


## Things I believe I did well

- Attempted to add as much aria labels, tags and lives as needed
- Split the components into separate hooks and services, not all in app.jsx
- Visually, isnt fantastic, but its my first time properly playing round with tailwind as opposed to a ui library
- No errors, no bugs (that I've managed to find, albeit a simple app)


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
