var moment = require("moment");
var myDate = new Date();
var myMomentDate = moment(myDate).format("LLLL")
console.log("Today is " + myMomentDate);
