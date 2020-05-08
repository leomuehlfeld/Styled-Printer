# Styled Printer

![beautify-thermal](https://user-images.githubusercontent.com/22169889/81113336-5837d180-8f20-11ea-8d49-2959c4b36c8b.jpg)

![npm version](https://badgen.net/npm/v/styled-printer) ![npm version](https://badgen.net/david/dep/leomuehlfeld/styled-printer)

Simple NodeJS Scripts to print beautiful layouts on your Adafruit/Sparkfun Thermalprinter.

## Features
🎨 **Custom Layouts** – Bypass Layout Limits

⚡️ **React** – Send from react-app with Live-Chat  

🐘 **Postgres** – Connect to Database to Archive

## Motivation
The idea was simple: People should be able to send a message to a remote thermal printer hooked up to a raspberrypi. Since the built in layout capabilities of the thermal printer and its library are really limited, I wanted to enable things like custom Fonts, proper typography, svgs and more. The Input should be located on a react-app with a live chat displaying all sent messages, while the server should archive sent messages in a database.

## How to run!
This Repository is set up as a mono-repo containing the frontend, server and printer sources in three different folders.

### Server
```bash
$ cd server
$ yarn install
```
In order to archive all printed messages, the project is currently set to connect to a postgres database. I reccomend doing it locally for devleopment and playarround but you can also connect to a production database. You can change the settings for your development and production database in server/knexfile.js. Edit your schema in server/migrations/schmema. For detailed documentation visit [Knex.](http://knexjs.org) Spin up a Database and run
```bash
$ knex migrate:latest
```
_If you need to know how to get a local database up and running, visit [DockerHub–Postgres.](https://hub.docker.com/_/postgres)_

Super! Everything is set, lets start the Server by running
```bash
$ yarn start
```

### Frontend
Set your Server-IP in frontend/src/app.js:32
```javascript
const s = io("000.000.0.00:8080");
```
```bash
$ cd frontend
$ yarn install
$ yarn start
```

### Printer
Install node and npm on your RaspberryPi. Go to your raspi-config and enable "Serial" under the Networking Options.
```bash
$ sudo raspi-config
```
Copy the "printer" folder to your RaspberryPi. And set your Server-IP in printer/print.js:9
```javascript
const s = io("000.000.0.00:8080");
```
```bash
$ cd printer
$ npm install
$ npm start
```

## Customize
If you want to edit the layout generated by the RaspberryPi, edit the file index.html located in printer/gen/. You'll find css, js and html in one file.
### Passed Parameters

Paramter | Origin
-------- | -------
Date | Generated
Message | Input Field
Author | Input Field

## Credits
Code and Graphics by [Leo Mühlfeld.](https://leomuehlfeld.at) This Project had is origins in the development of [owe.zone](https://timo.sh/owezone/). Original Idea & huge amount of help by [Timo Lins!](https://timo.sh) Demo Picture features [Faune Typeface by Alice Savoie / Cnap.](http://www.cnap.graphismeenfrance.fr/faune/en.html)
