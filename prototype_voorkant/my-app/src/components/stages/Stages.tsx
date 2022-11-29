import React, { useState, useEffect } from 'react';
import StageService from '../../services/StageService';
import { AxiosResponse } from 'axios';


const StagesOverview: React.FC = () => {
    const [stages, setStages] = useState<Array<any>>([]);
    const requestOptions = {
        headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}
    }
    useEffect(()=>{
        fetch('https://api-stages-tdf.herokuapp.com/stages/all',requestOptions)
        .then((res) => res.json())
        .then((data)=> {
            setStages(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, []);
    // const getStages = async () => {
    //     const res: AxiosResponse<Array<any>> = await StageService.getAllStages();
    //     setStages(res.data);
    // };
    return (
        <div>
            <table>
                <tr>
                    <th>id</th>
                    <th>year</th>
                    <th>distance</th>
                    <th>stage</th>
                </tr>
                {stages.map((variable, index)=>{
                    return (
                    <tr key={index}>
                        <td>{variable.id}</td>
                        <td>{variable.year}</td>
                        <td>{variable.distance}</td>
                        <td>{variable.stage}</td>
                    </tr>
                    )
                })}
            </table>
        </div>
    );
}
export default StagesOverview;