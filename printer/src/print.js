const Printer = require("thermalprinter");
const SerialPort = require("serialport");
const io = require("socket.io-client");

console.log("script now running");

const s = io("http://192.168.0.108:8080");

const serialPort = new SerialPort("/dev/ttyS0", {
  baudRate: 19200
});

serialPort.on("open", function() {
  const printer = new Printer(serialPort);

  // Listen for new incoming message
  s.on("message", message => {
    let value = message.message;
    let date = message.date;
    let author = message.author;

    console.log(`recieved message: ${value}`);
    printer
      .indent(50)
      .printLine(date)
      .printLine(`${author} wrote:`)
      .printLine(value)
      .print();
  });
});
