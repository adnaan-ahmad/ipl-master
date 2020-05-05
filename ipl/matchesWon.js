function matchesWon(matches) {
    const result2 = {}
    for (let match of matches) {
        const season = match.season
        const winner = match.winner
                if(result2[season]){
                    if(result2[season][winner]){
                        result2[season][winner]+=1
                    }
                    else{
                        result2[season][winner] = 1
                    }
                }  
                else{
                    result2[season] = {}
                }
    }
    //console.log(result2)
    return result2;
    }
    module.exports = matchesWon;

    
    









    // function matchesWon(matches) {
    // const result2 = {}
    // for (let match of matches) {
    //     //const season = match.season
    //     const winner = match.winner
    //             //if(result[winner]){
    //                 if(result2[winner]){
    //                     result2[winner]+=1
    //                 }
    //                 else{
    //                     result2[winner] = 1
    //                 }
    //             //}  
    //             // else{
    //             //     result[season] = {}
    //             // }
    // }
    // console.log(result2)
    // return result2;
    // }
    // module.exports = matchesWon;

    
    