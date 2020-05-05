function extraRuns(matches, deliveries) {
    
    let arr = []
    for(let match of matches){
        const id = match.id
        const season = match.season
        if(match.season=='2016'){
            arr.push(id)
        }
    }
    //console.log(arr)
        let min = Math.min(...arr)
        let max = Math.max(...arr)
    //console.log(min)
    //console.log(max)
    const result3 = {}
    for (let delivery of deliveries) {
      const match_id = delivery.match_id
      const bowling_team = delivery.bowling_team
      const extra_runs = delivery.extra_runs
       
      if (delivery.match_id>=min && delivery.match_id<=max) {
        if(result3[bowling_team]){
        result3[bowling_team]+=Number(extra_runs)
        }
        else {
        result3[bowling_team]=Number(extra_runs)
        }
      }
     
    }
    //console.log(result3)
    return result3;
} 
module.exports = extraRuns;