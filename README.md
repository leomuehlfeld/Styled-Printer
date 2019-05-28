# Air-Printer

Text gets send to a raspberrypi via a nodeJS server. The Raspberrypi renders the contents into an appealing layout that gets print on a thermal printer. The layout engine runs on headless chrome via puppeteer and is simply customizable with html, css and javascript.

## Motivation

The idea was simple: People should be able to send a message to a remote thermal printer hooked up to a raspberrypi. Since I intended to analyze and work with the collected messages, i wanted to store these message in a database. Every client should also be able to see a live-stream of current messages on their frontend.

## How does it work?

Client (ReactApp), Server (NodeJS App) and RaspberryPi (NodeJS App) are talking to each other via socket.io while the server stores the messages in a postgres database. The Raspberry passes the recieved messages into a headless browser rendering the plain text into a appealing layout! After that, image gets send to the printer!

## Authors

This Project was wirtten by [Leo Mühlfeld](https://leomuehlfeld.at) but could not have been done without the amazing help from [Timo Lins](https://timo.sh)!
