function strikeRate(matches, deliveries) {
    
    let arr = []
    for(let match of matches){
        const id = match.id
        const season = match.season
        if(match.season=='2019'){
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
      const batsman = delivery.batsman
      const batsman_runs = delivery.batsman_runs

      if (delivery.match_id>=min && delivery.match_id<=max) {
        if(runs[batsman]){
            runs[batsman]+=Number(batsman_runs)
        }
        else {    
            runs[batsman]=Number(batsman_runs)
        }
        if(balls[batsman]){
            balls[batsman]+=1
        }
        else{
            balls[batsman] = 1
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
            eco[ball] = runs[ball] / balls[ball] * 100
        }
    }
    //console.log(eco)
    var arr1 = Object.values(eco)
    arr1.sort((a,b)=>b-a)
    arr1 = arr1.slice(0,10)
    //console.log(arr1)
    
    let result5 = {}
    //var i = 0 
    for(var i=0; i<=9; i++){
    for(e in eco){
        //console.log(arr1.indexOf(eco[e]))
        //console.log(e)
        if(arr1.indexOf(eco[e])==i){
            result5[e] = Number(eco[e].toFixed(2))
            // i++
             //break
        }
        
    }
}
    //console.log(result5)
    return result5
} 
module.exports = strikeRate;
