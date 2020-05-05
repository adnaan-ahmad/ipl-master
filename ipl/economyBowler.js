function economyBowler(matches, deliveries) {
    
    let arr = []
    for(let match of matches){
        const id = match.id
        const season = match.season
        if(match.season=='2015'){
            arr.push(id)
        }
    }
    //console.log(arr)
        let min = Math.min(...arr)
        let max = Math.max(...arr)
    //console.log(min)
    //console.log(max)

    const runs = {}, balls = {}
    for (let delivery of deliveries) {
      const match_id = delivery.match_id
      const bowler = delivery.bowler
      const total_runs = delivery.total_runs

      if (delivery.match_id>=min && delivery.match_id<=max) {
        if(runs[bowler]){
            runs[bowler]+=Number(total_runs)
        }
        else {    
            runs[bowler]=Number(total_runs)
        }
        if(balls[bowler]){
            balls[bowler]+=1
        }
        else{
            balls[bowler] = 1
        }
      }
     
    }
    //console.log(runs)
    //console.log(balls)

    let eco = {}

    for(ball in balls){
        //console.log(balls[ball])
        //console.log(runs[ball])
        if(!(eco[ball])){
            eco[ball] = runs[ball] / (balls[ball]/6)
        }
    }
    //console.log(eco)
    var arr1 = Object.values(eco)
    arr1.sort((a,b)=>a-b)
    arr1 = arr1.slice(0,10)
    //console.log(arr1)
    
    let result4 = {}
    var i = 0 
    while(i<=9){
    for(e in eco){
        //console.log(arr1.indexOf(eco[e]))
        //console.log(e)
        if(arr1.indexOf(eco[e])==i){
            result4[e] = Number(eco[e].toFixed(2))
            i++
        }
        
    }
}
    //console.log(result4)
    return result4
} 
module.exports = economyBowler;
