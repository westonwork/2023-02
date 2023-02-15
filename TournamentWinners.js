// There's an algorithms tournament taking place in which teams of programmers
// compete against each other to solve algorithmic problems as fast as possible.
// Teams compete in a round robin, where each team faces off against all other
// teams. Only two teams compete against each other at a time, and for each
// competition, one team is designated the home team, while the other team is the
// away team. In each competition there's always one winner and one loser; there
// are no ties. A team receives 3 points if it wins and 0 points if it loses. The
// winner of the tournament is the team that receives the most amount of points.

// Given an array of pairs representing the teams that have competed against each
// other and an array containing the results of each competition, write a
// function that returns the winner of the tournament. The input arrays are named
// competitions and results, respectively. The competitions  array has elements in the form of
// [homeTeam, awayTeam], where each team is a string of at most 30
// characters representing the name of the team. The results  array
// contains information about the winner of each corresponding competition in the
// competitions array. Specifically, results[i] denotes
// the winner of competitions[i], where a 1 in the
// results array means that the home team in the corresponding
// competition won and a 0 means that the away team won.

// It's guaranteed that exactly one team will win the tournament and that each
// team will compete against all other teams exactly once. It's also guaranteed
// that the tournament will always have at least two teams.

const competitions1 = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
]
const results1 = [0, 0, 1]
//               0 = index[1]Home, 1 = index[0]Away 
const expected1 = "Python"

const competitions2 = [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"]
]
const results2 = [0, 1, 1]
const expected2 = "Java"

const competitions3 = [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"],
    ["C#", "Python"],
    ["Java", "C#"],
    ["C#", "HTML"]
]
const results3 = [0, 1, 1, 1, 0, 1]
const expected3 = "C#"

const competitions4 = [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"],
    ["C#", "Python"],
    ["Java", "C#"],
    ["C#", "HTML"],
    ["SQL", "C#"],
    ["HTML", "SQL"],
    ["SQL", "Python"],
    ["SQL", "Java"]
]
const results4 = [0, 1, 1, 1, 0, 1, 0, 1, 1, 0]
const expected4 = "C#"

const competitions5 = [
    ["Bulls", "Eagles"]
]
const results5 = [1]
const expected5 = "Bulls"

function tournamentWinner(competitions, results) {
    let homeTeamWinner = [];
    let awayTeamWinner = [];
    let homeTeamCount = 0;
    let awayTeamCount = 0;
    // go thru each result 1 by 1
    for(let i = 0; i<results.length; i++) {
        if(results[i] == 1){
            for(let j = 0; j<competitions.length; j++) {
                homeTeamWinner.push(competitions[j][0]);
                homeTeamCount++;
            }
        } else {
            awayTeamWinner.push(competitions[j][1]);
            awayTeamCount++;
        }
    }
    if(homeTeamCount > awayTeamCount) {
        return homeTeamWinner;
    } else {
        return awayTeamWinner;
    }
}

console.log(tournamentWinner(competitions1, results1))
console.log("-------------------")
console.log(tournamentWinner(competitions2, results2))
console.log("-------------------")
console.log(tournamentWinner(competitions3, results3))
console.log("-------------------")
console.log(tournamentWinner(competitions4, results4))
console.log("-------------------")
console.log(tournamentWinner(competitions5, results5))