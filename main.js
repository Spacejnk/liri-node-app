var moment = require("moment");
var myDate = new Date();
var myMomentDate = moment(myDate).format("LL")
console.log("Today is " + myMomentDate);
