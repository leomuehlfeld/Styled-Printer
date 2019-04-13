const Printer = require("thermalprinter");
const SerialPort = require("serialport");
const io = require("socket.io-client");
const generateImage = require("./getimg");
const sharp = require("sharp");
const streamToBuffer = require("stream-to-buffer");

console.log("script now running");

const s = io("http://192.168.0.108:8080");

const serialPort = new SerialPort("/dev/ttyS0", {
  baudRate: 19200
});

serialPort.on("open", function() {
  const printer = new Printer(serialPort);

  s.on("message", async message => {
    try {
      await generateImage(message);
      const img = __dirname + "/output.png";
      await printer.printImage(img).print();
    } catch (err) {
      console.error("Something went wrong", err);
    }
  });
});
