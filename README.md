# Air-Printer

Text gets send to a raspberrypi via a nodeJS server. The Raspberrypi renders the contents into an appealing layout that gets printed on a thermal printer. The layout engine runs on headless chrome via puppeteer and is simply customizable with html, css and javascript.

## Motivation

The idea was simple: People should be able to send a message to a remote thermal printer hooked up to a raspberrypi.Since the built in layout capabilities of the thermal printer and its library are really limited, I wanted to enable things like custom Fonts, proper linebrakes and more. The Input should be located on a webapp with a live chat of all messages beeing sent to the printer.

## How does it work?
I achieved this by equipping the Pi with headless-chrome.The received data renders into an appealing, fully customizeable, layout which gets printed out.
Client (ReactApp), Server (NodeJS App) and RaspberryPi (NodeJS App) are talking to each other over a websocket while the server receives, emmits and stores the messages in an optional postgres database.

## How to run
This Repository is set up as a mono-repo containing the frontend, server and printer sources in three different folders.
Follow these steps to get the sub-repos running. My version features a postgres integration which you'll have to get rid of if you dont want to save any messages for longer.

### Frontend
```
$ npm install
$ npm start
```

## Credits
This Project was wirtten by [Leo Mühlfeld](https://leomuehlfeld.at) but could not have been done without the amazing help from [Timo Lins](https://timo.sh)!
