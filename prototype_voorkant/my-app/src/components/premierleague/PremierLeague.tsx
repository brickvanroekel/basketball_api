import React, { useState, useEffect } from 'react';
import StageService from '../../services/StageService';
import axios, { AxiosResponse } from 'axios';


const PremierLeague: React.FC = () => {
    const [matches, setMatches] = useState<Array<any>>([]);
    const requestOptions = {
        headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}
    }
    useEffect(()=>{
        fetch('https://premierleague-app.herokuapp.com/all',requestOptions)
        .then((res) => res.json())
        .then((data)=> {
            setMatches(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, []);
    // const deleteMatch = (id: Number) => {
    //     const body = {"id": id}
    //     fetch('https://premierleague-app.herokuapp.com/delete',{
    //         method: 'DELETE',
    //         body: body
    //     })
    // }
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