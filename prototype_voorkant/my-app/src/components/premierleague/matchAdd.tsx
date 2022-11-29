import axios from "axios";
import { FC, SetStateAction, useState } from "react";

interface MatchAddProps {}

const MatchAdd: FC<MatchAddProps> = () => {
    const [divison, setDivision] = useState('');
    const [MatchDate, setMatchDate] = useState(new Date());
    const [HomeTeam, setHomeTeam] = useState('');
    const [AwayTeam, setAwayTeam] = useState('');
    const [FTHG, setfthg] = useState(0);
    const [FTAG, setftag] = useState(0);
    const [FTR, setftr] = useState('');
    const [HTHG, sethtgh] = useState(0);
    const [HTAG, sethtag] = useState(0);
    const [HTR, sethtr] = useState('');
    const [Referee, setReferee] = useState('');
    const [HS, seths] = useState(0);
    const [AS2, setas2] = useState(0);
    const [HST, sethst] = useState(0);
    const [AST, setast] = useState(0);
    const [HF, sethf] = useState(0);
    const [AF, setaf] = useState(0);
    const [HC, sethc] = useState(0);
    const [AC, setac] = useState(0);
    const [HY, sethy] = useState(0);
    const [AY, setay] = useState(0);
    const [HR, sethr] = useState(0);
    const [AR, setar] = useState(0);

    const handleDivisionChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setDivision(event.target.value);
        console.log(divison)
    }
    const handleHomeTeamChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setHomeTeam(event.target.value)
    }
    const handleAwayteamChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setAwayTeam(event.target.value)
    }
    const handleFTHG = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setfthg(Number(Number(event.target.value)))
        console.log(FTHG)
    }
    const handleFTAG = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setftag(Number(Number(event.target.value)))
    }
    const handleFTR = (event: { target: { value: SetStateAction<string>; }; }) => {
        setftr(event.target.value)
    }
    const handleHTHG = (event: React.ChangeEvent<HTMLInputElement>): void => {
        sethtgh(Number(Number(event.target.value)))
    }
    const handleHTAG = (event: React.ChangeEvent<HTMLInputElement>): void => {
        sethtag(Number(Number(event.target.value)))
    }
    const handleHTR = (event: { target: { value: SetStateAction<string>; }; }) => {
        sethtr(event.target.value)
    }
    const handleReferee = (event: { target: { value: SetStateAction<string>; }; }) => {
        setReferee(event.target.value)
    }
    const handleHS = (event: React.ChangeEvent<HTMLInputElement>): void => {
        seths(Number(Number(event.target.value)))
    }
    const handleAS2 = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setas2(Number(Number(event.target.value)))
    }
    const handleHST = (event: React.ChangeEvent<HTMLInputElement>): void => {
        sethst(Number(Number(event.target.value)))
    }
    const handleAST = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setast(Number(event.target.value))
    }
    const handleHF = (event: React.ChangeEvent<HTMLInputElement>): void => {
        sethf(Number(event.target.value))
    }
    const handleAF = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setaf(Number(event.target.value))
    }
    const handleHC = (event: React.ChangeEvent<HTMLInputElement>): void => {
        sethc(Number(event.target.value))
    }
    const handleAC = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setac(Number(event.target.value))
    }
    const handleHY = (event: React.ChangeEvent<HTMLInputElement>): void => {
        sethy(Number(event.target.value))
    }
    const handleAY = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setay(Number(event.target.value))
    }
    const handleHR = (event: React.ChangeEvent<HTMLInputElement>): void => {
        sethr(Number(event.target.value))
    }
    const handleAR = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setar(Number(event.target.value))
    }
    const handleSubmit = ():void => {
        const match = {
            Division: divison,
            MatchDate: new Date(),
            HomeTeam: HomeTeam,
            AwayTeam: AwayTeam,
            FTHG: FTHG,
            FTAG: FTAG,
            HTHG: HTHG,
            HTAG: HTAG,
            HTR: HTR,
            Referee: Referee,
            HS: HS,
            AS2: AS2,
            HST: HST,
            AST: AST,
            HF: HF,
            AF: AF,
            HC: HC,
            AC: AC,
            HY: HY,
            AY: AY,
            HR: HR,
            AR: AR
        };
        console.log("added")
        console.log(match)
        axios.post('https://premierleague-app.herokuapp.com/add', match)
    }
    return (
        <form onSubmit={handleSubmit}>
          <label>Division:<input type="text" value={divison} onChange={handleDivisionChange}/></label>
          <label>HomeTeam:<input type="text" value={HomeTeam} onChange={handleHomeTeamChange}/></label>
          <label>AwayTeam:<input type="text" value={AwayTeam} onChange={handleAwayteamChange}/></label>
          <label>FTHG:<input type="number" value={FTHG} onChange={handleFTHG}/></label>
          <label>FTAG:<input type="number" value={FTAG} onChange={handleFTAG}/></label>
          <label>FTR:<input type="text" value={FTR} onChange={handleFTR}/></label>
          <label>HTHG:<input type="number" value={HTHG} onChange={handleHTHG}/></label>
          <label>HTAG:<input type="number" value={HTAG} onChange={handleHTAG}/></label>
          <label>HTR:<input type="text" value={HTR} onChange={handleHTR}/></label>
          <label>Referee:<input type="text" value={Referee} onChange={handleReferee}/></label>
          <label>HS:<input type="number" value={HS} onChange={handleHS}/></label>
          <label>AS2:<input type="number" value={AS2} onChange={handleAS2}/></label>
          <label>HST:<input type="number" value={HST} onChange={handleHST}/></label>
          <label>AST:<input type="number" value={AST} onChange={handleAST}/></label>
          <label>HF:<input type="number" value={HF} onChange={handleHF}/></label>
          <label>AF:<input type="number" value={AF} onChange={handleAF}/></label>
          <label>HC:<input type="number" value={HC} onChange={handleHC}/></label>
          <label>AC:<input type="number" value={AC} onChange={handleAC}/></label>
          <label>HY:<input type="number" value={HY} onChange={handleHY}/></label>
          <label>AY:<input type="number" value={AY} onChange={handleAY}/></label>
          <label>HR:<input type="number" value={HR} onChange={handleHR}/></label>
          <label>AR:<input type="number" value={AR} onChange={handleAR}/></label>  
          <input type="submit" value="Submit" />
        </form>
      );
}
export default MatchAdd;