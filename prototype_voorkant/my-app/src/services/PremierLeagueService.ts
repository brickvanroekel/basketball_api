import axios from 'axios';
import { Match } from '../types/match';

const getAllMatches = () => axios.get<Array<any>>('https://premierleague-app.herokuapp.com/all')
//const deleteMatch = (id: number) => axios.delete<Response>('https://premierleague-app.herokuapp.com/delete', {id: id});
const updateMatch = (hometeam: string) => axios.put<Response>('https://premierleague-app.herokuapp.com/update',{HomeTeam:hometeam})
const addMatch = (match: Match) => axios.post<Response>('https://premierleague-app.herokuapp.com/add',{match:match})
// const addMatch = (
//     divison: string,
//     HomeTeam: string,
//     AwayTeam: string,
//     FTHG: number,
//     FTAG: number,
//     HTHG: number,
//     HTAG: number,
//     HTR: string,
//     Referee: string,
//     HS: number,
//     AS2: number,
//     HST: number,
//     AST: number,
//     HF: number,
//     AF: number,
//     HC: number,
//     AC: number,
//     HY: number,
//     AY: number,
//     HR: number,
//     AR: number,
//     ) => axios.post<Response>('https://premierleague-app.herokuapp.com/add', {
//         Division: divison,
//         MatchDate: new Date(),
//         HomeTeam: HomeTeam,
//         AwayTeam: AwayTeam,
//         FTHG: FTHG,
//         FTAG: FTAG,
//         HTHG: HTHG,
//         HTAG: HTAG,
//         HTR: HTR,
//         Referee: Referee,
//         HS: HS,
//         AS2: AS2,
//         HST: HST,
//         AST: AST,
//         HF: HF,
//         AF: AF,
//         HC: HC,
//         AC: AC,
//         HY: HY,
//         AY: AY,
//         HR: HR,
//         AR: AR
//         });

const PremierLeagueService = {
    getAllMatches,
    addMatch,
    updateMatch,
}

export default PremierLeagueService;