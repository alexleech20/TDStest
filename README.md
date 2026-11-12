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

- Attempted to add as much aria labels and tags as needed.
- Good error handling and fallbacks. Example, loading states on conversion when calling the API & preventative measures for API duplicate calls.
- Keyboard accessible.
- Split the components into separate hooks and services, not all in app.jsx.
- No errors, no bugs (that I've managed to find, albeit a simple app).
- For the first time playing round with tailwind as opposed to ui libraries I believe it looks OK.
- Easy for users to understand how the app works.
- Works well on mobile.
- Passes linting and has a good lighthouse report on `npm run build` > `npm run preview`.


## Given more time I would've made the following changes: 

- Made it more visually appealing via more in depth tailwind styling
- Attempting to split components rather than all in app.jsx. Creating a reusable card for currency would be my next step.
lack of aria tags and labels etc, so I would add those in future.
- I did also notice that the the hover effect on the 'convert' button wasnt working as intended, the 
cursor would not change state on hover of the button, this would need resolved. One step I took to semi-remedy this was by adding a border around the button, since, it currently doesnt visually look like a button.
- I would've had structured pull requests and code reviews between pushes to develop.
- I could've added in a flag icon library, and assigned flags to currencies to make them easier for users to understand origins.

## Problems I ran into 

- I ran into issues with CORS fairly quickly, the issue was due to a vite dev proxy, if this was a production app it would need some sort of backend proxy adding also as this only works locally.
- In all honesty, trying to work out how to make it look. I ended up leaning on Wise.com linked below for how it will look as originally when it was in plain HTML i was struggling for inspriation.
- This was my second attempt at building this, as I needed it to be secure and I made the silly mistake of adding my API token to the repo (the previous iteration), so I had to restart and put my .env into the gitignore before my first commit.

Inspiration: 

I used the following to help me design/ problem solve.

- https://wise.com/gb/currency-converter/
- https://tailwindcss.com/

## This app consists of the following:

- React v19.3.1
- tailwindcss v4.3.4
- Vite v8.3.5
