function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear),
  visualizeMatchesWon(data.matchesWon);
  visualizeExtraRuns(data.extraRuns);
  visualizeEconomyBowler(data.economyBowler);
  visualizeStrikeRate(data.strikeRate);
  return;
}

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category",
      title: {
        text: "Years"
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches Played"
      }
    },
    series: [
      {
        name: "Matches Played",
        data: seriesData
      }
    ]
  });
}


function visualizeMatchesWon(matchesWon) {
  const seriesData = [];
  var arr = []
  for (let i in matchesWon) {
    
    arr.push(Object.keys(matchesWon[i]))
    
      // if(arr.indexOf(matchesWon['i']['j'])==-1) arr.push(matchesWon['i']['j'])
    }
   //console.log(arr)

  var array = []
   for(var i=0; i<arr.length; i++){
     for(var j=0; j<arr[i].length; j++){
       array.push(arr[i][j])
     }
   }
  // console.log(array)

   array.sort()
   //console.log(array)

   for(var i=0; i<array.length-1; i++){
     if(array[i]==array[i+1] || array[i]==''){
       array.splice(i,1)
       i-- 
     }
   }
//console.log(array)

//var seriesData = []
for(var i=0; i<array.length; i++){
  var ob = {}, name = ob.name, data = ob.data
  for(var j in matchesWon){
    if(array.indexOf(ob.name)==-1){
    ob.name = array[i]
    //if(ob.name.length==0) ob.name = 'No Result'
    var y = []
    for(var k in matchesWon){
    if(matchesWon[k][array[i]]!=undefined) y.push(matchesWon[k][array[i]])
    else y.push(0)
    }
    ob.data = y
    seriesData.push(ob)
    }
  }
}
console.log(seriesData)

var years = Object.keys(matchesWon)
    
      // if(arr.indexOf(matchesWon['i']['j'])==-1) arr.push(matchesWon['i']['j'])
    //}
   console.log(years)


Highcharts.chart('matches-Won', {
  chart: {
      type: 'column'
  },
  title: {
      text: 'Matches Won by each team over all the years of IPL'
  },
  subtitle: {
      text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
  },
  xAxis: {
    title: {
      text: 'Years'
  },
  //type: "category",
      categories: years,

      crosshair: true
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Matches Won'
      }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series: seriesData

  
// series: [{
//       name: 'Chennai Super Kings',
//       data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
//   }, {
//       name: 'Delhi Daredevils',
//       data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

//   }, {
//       name: 'Delhi Capitals',
//       data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

//   }, {
//       name: 'Rising Pune Supergiants',
//       data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

//   }]
});
}


function visualizeExtraRuns(extraRuns) {
  const seriesData = [];
  for (let x in extraRuns) {
    seriesData.push([x, extraRuns[x]]);
  }

  Highcharts.chart("extra-Run", {
    chart: {
      type: "column"
    },
    title: {
      text: "Extra Runs Conceded by each team in 2016"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category",
      title: {
        text: "Teams"
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: "Extra Runs Conceded"
      }
    },
    series: [
      {
        name: "Extra Runs Conceded",
        data: seriesData
      }
    ]
  });
}


function visualizeEconomyBowler(economyBowler) {
  const seriesData = [];
  for (let e in economyBowler) {
    seriesData.push([e, economyBowler[e]]);
  }

  Highcharts.chart("economy-Bowler", {
    chart: {
      type: "column"
    },
    title: {
      text: "Top 10 Economical Bowlers in 2015"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category",
      title: {
        text: "Bowlers"
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy Rate"
      }
    },
    series: [
      {
        name: "Economy Rate",
        data: seriesData
      }
    ]
  });
}


function visualizeStrikeRate(strikeRate) {
  const seriesData = [];
  for (let e in strikeRate) {
    seriesData.push([e, strikeRate[e]]);
  }

  Highcharts.chart("strike-Rate", {
    chart: {
      type: "column"
    },
    title: {
      text: "Batsmen With Highest Strike Rates in 2019"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category",
      title: {
        text: "Batsmen"
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: "Strike Rate"
      }
    },
    series: [
      {
        name: "Strike Rate",
        data: seriesData
      }
    ]
  });
}
