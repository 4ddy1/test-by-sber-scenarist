const fs = require("fs");

fs.readFile("./main.json", function (err, data) {
  const obj = JSON.parse(data);
  var x = [];
  const getCardsArrayExpDate = (json, date) => {
    var dateArr = date.split("-");
    date = `${dateArr[2]}-` + `${dateArr[1]}-` + `${dateArr[0]}`;
    for (i = 0; i < json.CardInfo.length; i++) {
      var jsonArr = json.CardInfo[i].ExpDate.split("-");
      json.CardInfo[i].ExpDate =
        `${jsonArr[2]}-` + `${jsonArr[1]}-` + `${jsonArr[0]}`;
      if (date > json.CardInfo[i].ExpDate) {
        x += [`\n${json.CardInfo[i].CardNumber.substring(12, 16)}`];
      } else if (date <= json.CardInfo[i].ExpDate) continue;
      else return null;
    }
    if (x.length == 0) {
      return null;
    } else return x;
  };
  console.log(getCardsArrayExpDate(obj, "21-03-2022"));
});
