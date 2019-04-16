# Air-Printer

client-server-rpi interface for thermal printing generated content on a raspberrypi.

## Motivation

The idea was simple: People should be able to send a message to a remote thermal printer hooked up to a raspberrypi. Since I intended to analyze and work with the collected messages, i wanted to store these message in a database. Every client should also be able to see a live-stream of current messages on their frontend.

## How does it work?

Client (ReactApp), Server (NodeJS App) and RaspberryPi (NodeJS App) are talking to each other via socket.io while the server stores the messages in a postgres database. The Raspberry passes the recieved messages into a p5js sketch enabling the power of processing! After generating a canvas the binary of the image gets send to the printer!

## Authors

This Project was wirtten by [Leo Mühlfeld](https://leomuehlfeld.at) but could not have been done without the amazing help from [Timo Lins](https://timo.sh)!
