# Age Year Magic

Project by Sheyna Watkins

This tool is an aid to genealogists trying to determine the approximate age of an ancestor based on their reported age at various census date.

## Why

It is well known that ages reported in census reports are approximate and birth dates weren't commonly reported until fairly recently. One reason that data from past census can be fuzzy is because if you weren't home when the census ennumorator came to your house, the ennumorator could ask your neighbors for the information about you (ex. "We think she's about 30 years old"). Genealogist today have to take in all available data to approximate the most likely birth date for an ancestor. This tool takes some off the work load when it comes to calcuating ages on the various census dates.

## How

The tech stack used to create this app

* Vite
* React
* Daysjs
* Material UI

## Features

* enter a birth date, see ages calcuated from that birth date
* Pick which census records you want calculated in a result based on what census records would be available for the ancestor you are looking at.

At the moment this app only has 2 census options:

* U.S. Federal Census Records
  * with an option to show or hide the 1890 U.S. Federal Census (this census was almost entirely lost in a fire etc... and in unavailble for most ancestors. A bit of a score subject to genealogists)
* Kansas State Census Records

## Resources

* Material UI, Days.js and TypeScript docs are as always invaluable

## Set up to view locally

* download
* run `npm i`
* run `npm run dev`

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
