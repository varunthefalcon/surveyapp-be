 
var fs = require("fs");
var date, day, month, year, hour, min, sec, fulltime; 
function gettime() {

    date = new Date();
    hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    min = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    sec = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    year = date.getFullYear();

    month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    day = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    fulltime = year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
}

var logger = {
   
    info: function (ErrorString) {
        gettime();
        var filename = 'public/logs/' + day + '-' + month + '-' + year + '_' + 'ErrorLog.log';
        fs.stat(filename, function (err, stat) {
            var ConstructMessage = '{"Level": "info", "Message":"' + ErrorString + '", "timestamp":"' + fulltime + '"}';
            if (err == null) {
                fs.appendFile(filename, ConstructMessage + "\r\n", 'utf8', function (err) {
                    if (err) throw err;
                });
            } else if (err.code == 'ENOENT') {
             
                fs.writeFile(filename, ConstructMessage + "\r\n", 'utf8', function (err) {
                    if (err) throw err;
                });
            } else {
                fs.writeFile(filename, ConstructMessage + "\r\n", 'utf8', function (err) {
                    if (err) throw err;
                });
            }
        });
    },
    error: function (ErrorString) {
        gettime();
        var filename = 'public/logs/' + day + '-' + month + '-' + year + '_' + 'ErrorLog.log';
        fs.stat(filename, function (err, stat) {
            var ConstructMessage = '{"Level": "error", "Message":"' + ErrorString + '", "timestamp":"' + fulltime+'"}';
            if (err == null) {
                fs.appendFile(filename, ConstructMessage + "\r\n", 'utf8', function (err) {
                    if (err) throw err;
                });
            } else if (err.code == 'ENOENT') {
                fs.writeFile(filename, ConstructMessage + "\r\n", 'utf8', function (err) {
                    if (err) throw err;
                });
            } else {
                fs.writeFile(filename, ConstructMessage + "\r\n", 'utf8', function (err) {
                    if (err) throw err;
                });
            }
        });
    }

};
module.exports = logger;
