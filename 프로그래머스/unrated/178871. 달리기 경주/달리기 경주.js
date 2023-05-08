function solution(players, callings) {
//     callings.forEach((name) => {
//         const indexOfPlayer = players.indexOf(name);
//         [players[indexOfPlayer-1], players[indexOfPlayer]] = [players[indexOfPlayer],players[indexOfPlayer-1]]
//     })
    
//     return players; 시간 초과;;
    const playersObject = {}
    players.forEach((player,rank) => {
        playersObject[player] = rank;
    })
    
    callings.forEach((winner) => {
        const winnerRank = playersObject[winner];
        const loserRank = winnerRank-1
        const loser = players[loserRank];
        
        
        [players[winnerRank], players[loserRank]] = [players[loserRank], players[winnerRank]]
        playersObject[winner] -= 1;
        playersObject[loser] += 1;
        
    })
    return players
}