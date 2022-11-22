import { Match } from '../types';

const allMatches: Match[] = [
    { id: 1, home_team: 'Genk', away_team: 'Brugge',date: new Date(2022, 9, 20), score: '3-0'},
    { id: 2, home_team: 'Standard', away_team: 'Sint-truiden',date: new Date(2022, 10, 11), score: '2-1' },
    { id: 3, home_team: 'Brugge', away_team: 'Oostende',date: new Date(2021, 4, 30), score: '6-5' },
    { id: 4, home_team: 'Genk', away_team: 'Standard',date: new Date(2021, 7, 14), score: '5-3' },
    { id: 5, home_team: 'mechelen', away_team: 'Sint-truiden',date: new Date(2021, 8, 4), score: '3-1' },
];

const getAllMatches = (onResult: (error: Error, allMatches: Match[]) => void) => {
    onResult(null, allMatches);
};

const addMatch = (match: Match, onResult: (error: Error) => void) => {
    const id = allMatches[allMatches.length - 1].id++;
    allMatches.push({ id, ...match });
    onResult(null);
};

const deleteMatch = (id: Number, onResult: (error: Error, id: Number) => void) => {
    let found = false;
    let nameDeleteMatch = '';
    for (let i = 0; i < allMatches.length && !found; i++) {
        if (allMatches[i].id == id) {
            allMatches.splice(i, 1);
            found = true;
        }
    }
    if (found) {
        onResult(null, id)
    } else {
        let error = new Error("Unknown id");
        onResult(error, null);
    }
}

export { getAllMatches, addMatch, deleteMatch };
