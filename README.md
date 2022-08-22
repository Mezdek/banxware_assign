# Banxware Assignment

This is an attempt to solve an assignment for an internship in Banxware.

- [What it does](#what-it-does)
- [How to start](#how-to-start)
- [Technical details](#technical-details)

## What it does

- It requests balance and transactions data from a banxware api.
- It calculates the balance history.
- It uses the Chart.js api to render the balance history, for different time ranges as well.

## How to start

1. First install the dependencies by running

```bash
npm install
# or
yarn install
```

2. Copy the `.env.sample` file to `.env` and fill in the api token for banxware api.

3. Then run the server by running

```bash
npm run dev
# or
yarn dev
```

4. Finally, open the browser to [http://localhost:3000](http://localhost:3000)

## Technical details

This project was built using:

- [Next.js](https://nextjs.org/docs)
- [Chart.js](https://www.chartjs.org/docs/latest/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Axios](https://axios-http.com/docs/intro)
