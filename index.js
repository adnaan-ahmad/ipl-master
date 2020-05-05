const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWon = require("./ipl/matchesWon");
const extraRuns = require("./ipl/extraRuns");
const economyBowler = require("./ipl/economyBowler");
const strikeRate = require("./ipl/strikeRate");
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";

function main() {
  
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
  csv()
    .fromFile(DELIVERIES_FILE_PATH)
    .then(deliveries => {
      let result1 = matchesPlayedPerYear(matches)
      let result2 = matchesWon(matches)
      let result3 = extraRuns(matches, deliveries)
      let result4 = economyBowler(matches, deliveries)
      let result5 = strikeRate(matches, deliveries)
      saveData(result1, result2, result3, result4, result5);
    });
  });
}

function saveData(result1, result2, result3, result4, result5) {
  const jsonData = {
    matchesPlayedPerYear : result1,
    matchesWon : result2,
    extraRuns : result3,
    economyBowler : result4,
    strikeRate : result5
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main();