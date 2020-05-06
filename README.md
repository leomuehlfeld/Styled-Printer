# Styled Printer
Simple NodeJS Scripts to print beautiful layouts on your Adafruit/Sparkfun Thermalprinter.

![beautify-thermal](https://user-images.githubusercontent.com/22169889/81113336-5837d180-8f20-11ea-8d49-2959c4b36c8b.jpg)

_Font on right example: [Faune, Alice Savoie / Cnap](http://www.cnap.graphismeenfrance.fr/faune/en.html)_

## Features
🎨 **Custom Layouts** – Bypass Layout Limits

⚡️ **React** – Send from React-Frontend with Live-Chat  

🐘 **Postgres** – Connect to Database to Archive

## Motivation
The idea was simple: People should be able to send a message to a remote thermal printer hooked up to a raspberrypi.Since the built in layout capabilities of the thermal printer and its library are really limited, I wanted to enable things like custom Fonts, proper typography and more. The Input should be located on a react-webapp with a live chat displaying all sent messages.

## How does it work?
I achieved this by equipping the Pi with headless-chrome. The received data renders into an appealing, fully customizeable, layout which gets printed out. Client (ReactApp), Server (NodeJS App) and RaspberryPi (NodeJS App) are talking to each other over a websocket while the server receives, emmits and stores the messages in an optional postgres database.

## How to run
This Repository is set up as a mono-repo containing the frontend, server and printer sources in three different folders.
Follow these steps to get the sub-repos running. My version features a postgres integration which you'll have to get rid of if you dont want to save any messages for longer.
### Server
The Project is currently set to connect to a postgres database running locally on port 5432. You can change that in server/knexfile.js.
```javascript
connection: "postgres://postgres@localhost:5432/postgres"
```
```bash
$ yarn install
$ yarn start
```

### Frontend
```bash
$ yarn install
$ yarn start
```

### Printer
Make sure to have node and npm installed. Copy the "printer" sub-repo to your RaspberryPi via SFTP. You can use clients like Transmit, Cyberduck, FileZilla, etc. to do so. Make sure to enable Serial-Connevtivity for your RaspberryPi. The easiest way is, to go to your raspi-config and enable "Serial" under the Networking Options.

```bash
$ sudo raspi-config
```
Reboot, install dependencies and run the print.js file via node.
```bash
$ cd printer
$ npm install
$ node print.js
```
If you want to edit the layout, edit the file index.html located in printer/gen/.

## Credits
Code and Graphics by [Leo Mühlfeld.](https://leomuehlfeld.at) This Project had is origins in the development of [owe.zone](https://timo.sh/owezone/). Original Idea & huge amount of help by [Timo Lins!](https://timo.sh) Demo Picture features [Faune Typeface by Alice Savoie / Cnap.](http://www.cnap.graphismeenfrance.fr/faune/en.html)
