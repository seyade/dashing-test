# Dashing Web Design test

## A simple app with a login and a table page.

You'll notice that I'm using hyphenated word for component names instead of the Pascal case. The idea is from Next.js file name system.

### Run the app

Run the app with `npm start`.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Use these 3 users to login (they're injected automatocally in localStorage when the app is loaded). Each of these users has different access for editing the table:

(role: all)
username: `Ryuseioh`
password: `admin1`

(role: editor)
username: `Houou`
password: `admin2`

(no role)
username: `Kirin`
password: `admin3`

You can always change or add users' details for the `localStorage` in the `src/pages/sign-in.tsx` file.

### Run tests

There's also a simple unit-test that you can run for the Sign In page. The unit-test are using the React Testing Library.
You can run it with `npm run test`
