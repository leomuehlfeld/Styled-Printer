const Printer = require("thermalprinter");
const SerialPort = require("serialport");

const serialPort = new SerialPort("/dev/ttyS0", {
  baudRate: 19200
});

console.log("serialPort open");
var path = "testimg.png";

serialPort.on("open", function() {
  const printer = new Printer(serialPort);
  printer.on("ready", function printit() {
    printer.printImage(path).print();
  });
});
