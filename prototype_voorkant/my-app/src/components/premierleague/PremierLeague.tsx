import React, { useState, useEffect } from 'react';
import PremierLeagueService from '../../services/PremierLeagueService';
import axios, { AxiosResponse } from 'axios';


const PremierLeague: React.FC = () => {
    const [matches, setMatches] = useState<Array<any>>([]);
    useEffect(()=>{
        getMatches()
    })
    const getMatches = async () => {
        const res: AxiosResponse<Array<any>> = await PremierLeagueService.getAllMatches();
        setMatches(res.data);
    };

    return (
        <div>
            <table>
                <tr>
                    <th>id</th>
                    <th>HomeTeam</th>
                    <th>AwayTeam</th>
                    <th>Score</th>
                    <th>Delete</th>
                </tr>
                {matches.map((variable, index)=>{
                    return (
                    <tr key={index}>
                        <td>{variable.id}</td>
                        <td>{variable.HomeTeam}</td>
                        <td>{variable.AwayTeam}</td>
                        <td>{variable.FTHG} - {variable.FTAG}</td>
                        <td></td>
                    </tr>
                    )
                })}
            </table>
        </div>
    );
}
export default PremierLeague;